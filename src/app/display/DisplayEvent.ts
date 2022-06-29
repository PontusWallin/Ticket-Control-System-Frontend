import {EventStats} from "./EventStats";

export class DisplayEvent {

  constructor(eventStats: EventStats[]) {
    this._eventStats = eventStats;
  }

  private readonly _eventStats: EventStats[];

  get eventStats(): EventStats[] {
    return this._eventStats;
  }
}
