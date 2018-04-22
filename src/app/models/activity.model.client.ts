import {User} from './user.model.client';
import Any = jasmine.Any;

export class Activity {
  _id: String;
  name: String;
  schedule: String;
  location: String;
  description: String;
  capacity: Number;
  players: User[];

  constructor(_id, name, schedule, location, description, capacity) {
    this._id = _id;
    this.name = name;
    this.schedule = schedule;
    this.location = location;
    this.description = description;
    this.capacity = capacity;
  }
}
