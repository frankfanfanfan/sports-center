import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../../../../services/activity.service.client';
import {User} from '../../../../models/user.model.client';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../services/user.service.client';
import {Activity} from '../../../../models/activity.model.client';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {

  user: User;
  activities: Activity[];
  users: User[];
  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private activityService: ActivityService
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.user = this.userService.findUserById(params['uid']);
        this.activities = this.activityService.activities;
        this.users = this.userService.users;
      }
    );
  }

  deleteUser(people) {
    if (people.role === 'owner') {
      alert('You can not delete your self...');
    } else {
      this.userService.deleteUser(people._id);
    }
  }

}
