import { Event } from 'src/app/Event';

export class EventStats {
  public _event!: Event;

  public _numberOfTickets = 0;

  // ticket status
  public _percentageSold = 0;
  public _percentageValidated = 0;
  public _percentageCancelled = 0;
}
