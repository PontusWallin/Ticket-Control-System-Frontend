import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Networking} from "../Networking";
import {DisplayEvent} from "./DisplayEvent";

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http: HttpClient,) { }

  display() {
    return this.http.get<DisplayEvent>(Networking.FULL_DISPLAY_ENDPOINT)
  }
}
