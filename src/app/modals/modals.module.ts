import { NgModule } from "@angular/core";
import { CreatPostModalComponent } from './creat-post-modal/creat-post-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[NgbModule, ReactiveFormsModule, CommonModule],
    declarations:[CreatPostModalComponent],
    entryComponents:[CreatPostModalComponent]
})
export class ModalsModule{}