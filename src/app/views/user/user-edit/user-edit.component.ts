import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.userService.findUserById(params['uid']).subscribe(
          (user: User) => {
            this.user = user;
          }
        );
      }
    );
  }

}
