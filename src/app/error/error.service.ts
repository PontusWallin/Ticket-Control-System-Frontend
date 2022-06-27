import {ErrorDialogComponent} from "./error-dialog/error-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class ErrorService {

  constructor(
    private dialog: MatDialog,
    private snackbar: MatSnackBar) {}

  showErrorPopUp(error: any){
    let dialogRef = this.dialog.open(ErrorDialogComponent, { data: error});
    dialogRef.afterClosed().subscribe(() => {
      return;
    })
  }

  showErrorSnackBar(error: any) {
    this.snackbar.open(error.message, '',{duration: 3000});
  }
}
