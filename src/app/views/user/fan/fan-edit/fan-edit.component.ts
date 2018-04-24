import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {UserService} from '../../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fan-edit',
  templateUrl: './fan-edit.component.html',
  styleUrls: ['./fan-edit.component.css']
})
export class FanEditComponent implements OnInit {

  user: User;
  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      this.userService.findUserById(params['uid']).subscribe(
        (user: User) => {
          this.user = user;
        }
      );
    });
  }

  updateUser(newUser) {
    this.userService.updateUser(newUser).subscribe(
      (user: User) => {
        this.user = user;
      }
    );
  }
}
