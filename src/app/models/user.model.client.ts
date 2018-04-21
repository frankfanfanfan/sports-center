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
  activities: [Activity];
  likes: [Activity];

  constructor(_id, username, password, role, email, phone, firstName, lastName, description) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.role = role;
    this.email = email;
    this.phone = phone;
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
  }
}
