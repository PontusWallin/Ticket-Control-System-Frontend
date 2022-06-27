import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayComponent } from './display/display.component';
import {HttpClientModule} from "@angular/common/http";
import {ErrorService} from "./error/error.service";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ErrorDialogComponent} from "./error/error-dialog/error-dialog.component";
import {AppRoutingModule} from "./app-routing.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import { ValidateComponent } from './validate/validate.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoadComponent } from './load/load.component';
import {HeaderComponent} from "./header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ErrorDialogComponent,
    ValidateComponent,
    LoadComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatDialogModule,
    MatListModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
  ],
  providers: [
    ErrorService,
    MatDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
