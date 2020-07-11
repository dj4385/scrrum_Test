import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalsModule } from '../modals/modals.module';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ModalsModule
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})

export class SharedModule{}