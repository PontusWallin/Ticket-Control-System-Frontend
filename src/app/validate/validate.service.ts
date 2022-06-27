import {HttpClient} from "@angular/common/http";
import {Networking} from "../Networking";
import {Injectable} from "@angular/core";
import {Ticket} from "../Ticket";

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  constructor(private http: HttpClient,) { }

  validate(ticketID: number) {
    return this.http
      .put<Ticket>(Networking.FULL_VALIDATE_ENDPOINT + '/' + ticketID, {});
  }
}
