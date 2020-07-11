import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreatPostModalComponent } from 'src/app/modals/creat-post-modal/creat-post-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isOpen: boolean = false

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  openModal(){
    const modelRef = this.modalService.open(CreatPostModalComponent)
    modelRef.componentInstance.post = 'Create Post'
  }

}
