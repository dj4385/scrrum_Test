import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/common/api.service';
import { MessageService } from 'src/app/common/message.service';

@Component({
  selector: 'app-creat-post-modal',
  templateUrl: './creat-post-modal.component.html',
  styleUrls: ['./creat-post-modal.component.css']
})
export class CreatPostModalComponent implements OnInit {
  @Input() post
  postForm: FormGroup

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private apiService: ApiService,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm(){
    this.postForm = this.fb.group({
      userId: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    })
  }

  get control(){
    return this.postForm['controls']
  }

  onSubmit(form){
    if(!form.valid){
      this.message.errorMsg('Invalid Form')
      return
    } else {
      debugger
      this.apiService.createPost(form.value).subscribe(
        res=>{
          debugger
          if(res){
            this.message.successMsg('Post Created Successfully')
            this.postForm.reset()
            this.activeModal.close()
          }
        },
        err=>{
          this.message.errorMsg(err.message)
        }
      )
    }
  }
}
