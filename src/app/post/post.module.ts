import { NgModule } from "@angular/core";
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
    {
        path: 'home',
        component: PostListComponent
    },
    {
        path: 'post-detail/:id',
        component: PostDetailComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgxSpinnerModule,
        ToastrModule.forRoot()
    ],
    declarations: [
    PostListComponent,
    PostDetailComponent]
})

export class PostModule {}