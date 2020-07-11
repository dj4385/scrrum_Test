import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})

export class MessageService{
    constructor(
        private toast: ToastrService
    ){}

    successMsg(message){
       return this.toast.success(message, 'Success')
    }
    errorMsg(message){
       return this.toast.error(message, 'Error')
    }

}