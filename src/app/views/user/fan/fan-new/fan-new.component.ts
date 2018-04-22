import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/user.service.client';
import {User} from '../../../../models/user.model.client';

@Component({
  selector: 'app-fan-new',
  templateUrl: './fan-new.component.html',
  styleUrls: ['./fan-new.component.css']
})
export class FanNewComponent implements OnInit {

  constructor(
    private userService: UserService) { }

  ngOnInit() {
  }

  register(username, password, passval, email, phone, firstName, lastName) {
    if (password === passval) {
      const newUser = new User(undefined, username, password, 'fan', email, phone, firstName, lastName, '');
      this.userService.createuser(newUser);
    } else {
      alert('Password not match');
    }
  }

}
