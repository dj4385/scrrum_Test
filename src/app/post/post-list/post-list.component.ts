import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';
import { post } from '../post';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/common/message.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList: post[] = []

  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private message: MessageService
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

}
