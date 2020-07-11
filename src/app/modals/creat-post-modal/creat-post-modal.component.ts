import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/common/api.service';
import { MessageService } from 'src/app/common/message.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-creat-post-modal',
  templateUrl: './creat-post-modal.component.html',
  styleUrls: ['./creat-post-modal.component.css']
})
export class CreatPostModalComponent implements OnInit {
  @Input() post
  @Input() public postObject
  isPostObject: boolean = false
  postForm: FormGroup

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private apiService: ApiService,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.createForm()
    if(Object.keys(this.postObject).length){
      this.isPostObject = true
      this.patchValue(this.postObject)
    }
  }

  createForm(){
    this.postForm = this.fb.group({
      userId: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    })
  }

  patchValue(value){
    this.postForm.patchValue({
      userId: value.userId,
      title: value.title,
      body: value.body
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
      if(this.isPostObject){
        this.updatePostData(form)
      } else{
        this.createPost(form)
      }
    }
  }

  updatePostData(form){
    this.apiService.updatePost(this.postObject.id, form.value).subscribe(
      res=>{
        if(res){
          this.message.successMsg('Post Detail Updated Successfully')
          this.activeModal.close()
          window.location.reload()
        }
      },
      err=>{
        this.message.errorMsg(err.message)
      }
    )
  }

  createPost(form){
    this.apiService.createPost(form.value).subscribe(
      res=>{
        if(res){
          this.message.successMsg('Post Created Successfully')
          this.postForm.reset()
          this.activeModal.close()
          window.location.reload()
        }
      },
      err=>{
        this.message.errorMsg(err.message)
      }
    )
  }
}
