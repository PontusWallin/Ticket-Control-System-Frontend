import {EventStats} from "./EventStats";

export class DisplayEvent {

  constructor(evemtStats: EventStats[]) {
    this._eventStats = evemtStats;
  }

  private _eventStats: EventStats[];

  get eventStats(): EventStats[] {
    return this._eventStats;
  }
}
