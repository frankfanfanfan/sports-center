import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {UserService} from '../../../../services/user.service.client';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css']
})
export class PlayerNewComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  register(username, password, passval, email, phone, firstName, lastName, decription) {
    if (password === passval) {
      const newUser = new User(undefined, username, password, 'player', email, phone, firstName, lastName, decription);
      this.userService.createuser(newUser);
    } else {
      alert('Password not match');
    }
  }

}
