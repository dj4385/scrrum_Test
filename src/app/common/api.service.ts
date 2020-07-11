import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { post } from '../post/post';
import { comment } from '../post/comment';

@Injectable({
    providedIn: 'root'
})

export class ApiService{
    constructor(
        private httpClient: HttpClient
    ){}

    getPostList = () => this.httpClient.get<post[]>(`${environment.apiUrl}posts`)
    createPost = (postData) => this.httpClient.post(`${environment.apiUrl}posts`,postData)
    getPostDetail = (id:Number) => this.httpClient.get<post>(`${environment.apiUrl}posts/${id}`)
    deletePost = (id:Number) => this.httpClient.delete(`${environment.apiUrl}posts/${id}`)
    updatePost = (id:Number, postData) => this.httpClient.put(`${environment.apiUrl}posts/${id}`,postData)

    showCommentOfPost = (id:Number) => this.httpClient.get<comment[]>(`${environment.apiUrl}posts/${id}/comments`)
}