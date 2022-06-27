export class Event {
  constructor() {
    this.id = 0;
    this.eventInfo = 'eventInformation';
    this.eventLocation = 'eventLocation';
    this.timeOfEvent = new Date();
    this.hasBarcode = true;
}

id: number;

hasBarcode: boolean;

eventInfo: string;

eventLocation: string;

timeOfEvent: Date;
}
