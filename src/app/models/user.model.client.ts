import {Activity} from './activity.model.client';

export class User {
  _id: String;
  username: String;
  password: String;
  role: String;
  email: String;
  phone: String;
  firstName: String;
  lastName: String;
  description: String;
  activities: Activity[];
  likes: Activity[];

  constructor(_id, username, password, role, email, phone, firstName, lastName, description) {
    this._id = _id;
    this.username = username || null;
    this.password = password || null;
    this.role = role || null;
    this.email = email || null;
    this.phone = phone || null;
    this.firstName = firstName || null;
    this.lastName = lastName || null;
    this.description = description || null;
  }
}
