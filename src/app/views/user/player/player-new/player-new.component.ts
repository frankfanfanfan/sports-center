import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {UserService} from '../../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css']
})
export class PlayerNewComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  register(username, password, passval, email, phone, firstName, lastName, decription) {
    if (password === passval) {
      const newUser = new User(undefined, username, password, 'player', email, phone, firstName, lastName, decription);
      this.userService.createUser(newUser).subscribe(
        (user: User) => {
          console.log(user);
          this.router.navigate(['/user', user._id]);
        }
      );
    } else {
      alert('Password not match');
    }
  }

}
