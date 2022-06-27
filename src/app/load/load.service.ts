import {HttpClient} from "@angular/common/http";
import {Networking} from "../Networking";
import {Injectable} from "@angular/core";

type LoadTicketParams = { ticketInformations: string, validationCode: string, eventReference: number };

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  constructor(private http: HttpClient) {}

  load(ticket : LoadTicketParams) {
    return this.http.post(Networking.FULL_LOAD_ENDPOINT, ticket)
  }
}
