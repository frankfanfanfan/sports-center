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
      this.user = this.userService.findUserById(params['uid']);
    });
  }

  updateUser(user) {
    this.user = this.userService.updateUser(user);
  }
}
