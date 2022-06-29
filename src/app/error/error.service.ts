import {MatDialog} from "@angular/material/dialog";
import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class ErrorService {

  constructor(
    private dialog: MatDialog,
    private snackbar: MatSnackBar) {}

  showErrorSnackBar(error: any) {
    this.snackbar.open(error.message, '',{duration: 3000});
  }
}
