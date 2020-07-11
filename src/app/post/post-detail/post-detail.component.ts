import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';
import { ActivatedRoute } from '@angular/router';
import { post } from '../post';
import { comment } from '../comment';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/common/message.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId: Number
  postRes: post
  commentList: comment[] = []
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.spinner.show()
    this.activatedRoute.params.subscribe(
      param=>{
        this.postId = param['id']
        if(this.postId){
          this.postDetail(this.postId)
          this.postComment(this.postId)
        } else {
          this.message.errorMsg('Id not found')
        }
      }
    )
    setTimeout(()=>{
      this.spinner.hide()
    },1000)
  }
  
  postDetail(id){
    this.apiService.getPostDetail(id).subscribe(
      res=>{
        if(res){
          this.postRes = res
          console.log(this.postRes)
        }
      },
      err=>{
        this.message.errorMsg(err.message)
      }
    )
  }

  postComment(id){
    this.apiService.showCommentOfPost(id).subscribe(
      res=>{
        if(res){
          this.commentList = res
        }
      },
      err=>{
        this.message.errorMsg(err.message)
      }
    )
  }

}
