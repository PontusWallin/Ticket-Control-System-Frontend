import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ValidateService} from "./validate.service";
import {ErrorService} from "../error/error.service";
import {Ticket} from "../Ticket";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent {

  constructor(
    private validateService: ValidateService,
    private errorService: ErrorService,
    private snackbar: MatSnackBar,
  ) { }

  validateTicket(form : NgForm) {

    if(form.invalid) {
      return;
    }

    let ticketId = form.value.ticketId;

    this.validateService.validate(ticketId).subscribe((_ticket: Ticket) => {
      this.snackbar.open('Ticket validated!', '', {duration: 3000})
    }, error => {
      this.errorService.showErrorSnackBar(error);
    });
  }
}
