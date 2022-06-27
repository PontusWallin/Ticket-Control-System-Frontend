import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoadService} from "./load.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ErrorService} from "../error/error.service";

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  constructor(
    private loadService: LoadService,
    private snackbar: MatSnackBar,
    private errorService: ErrorService,
    ) { }

  ngOnInit(): void {}

  onLoad(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.loadService.load(form.value).subscribe( (response) => {
      this.snackbar.open('Ticket Loaded!', '', {duration: 3000})
    }, error => {
      this.errorService.showErrorSnackBar(error);
    });
  }
}
