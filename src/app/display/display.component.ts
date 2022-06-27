import { Component, OnInit } from '@angular/core';
import {DisplayService} from "./display.service";
import {ErrorService} from "../error/error.service";
import {DisplayEvent} from "./DisplayEvent";
import {EventStats} from "./EventStats";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  eventStats: EventStats[] = [];

  constructor(
    private displayService: DisplayService,
    private errorService: ErrorService,
    ) { }

  ngOnInit(): void {
    this.displayService.display().subscribe((response: DisplayEvent) => {
      this.eventStats = response.eventStats;
    }, error => {
      this.errorService.showErrorSnackBar(error);
    });
  }

}
