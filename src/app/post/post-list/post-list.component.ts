import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';
import { post } from '../post';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/common/message.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList: post[] = []
  closeResult = '';


  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private message: MessageService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.spinner.show()
    this.postsList()
  }

  postsList(){
    this.apiService.getPostList().subscribe(
      res=>{
        if(res){
          debugger
          this.postList = res
          this.spinner.hide()
        }
      },
      err=>{
        this.message.errorMsg(err.message)
        this.spinner.hide()
      }
    )
  }

  postId:Number
  open(content, id) {
    this.postId = id
    const modalRef = this.modalService.open(content,)

    modalRef.result.then((result) => {
      console.log('res',result)
    },(reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  delete(postId){
    this.spinner.show()
    if(postId){
      this.apiService.deletePost(postId).subscribe(
        res=>{
          if(res){
            console.log(res)
            this.message.successMsg('Post Deleted Successfully')
            this.postsList()
            this.modalService.dismissAll()
            this.spinner.hide()
          }
        },
        err=>{
          this.message.errorMsg(err.message)
          this.spinner.hide()
        }
      )
    }
  }
}
