import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../../../../services/activity.service.client';
import {User} from '../../../../models/user.model.client';
import {ActivatedRoute, Router} from '@angular/router';
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
    private activityService: ActivityService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.userService.findUserById(params['uid']).subscribe(
          (user: User) => {
            this.user = user;
          }
        );
        this.activityService.findAllActivities().subscribe(
          (activities: Activity[]) => {
            this.activities = activities;
          }
        );
        this.userService.findAllUsers().subscribe(
          (users: User[]) => {
            this.users = users;
          }
        );
      }
    );
  }

  deleteUser(people) {
    if (people.role === 'owner') {
      alert('You can not delete your self...');
    } else {
      this.userService.deleteUser(people._id).subscribe(
        (users: User[]) => {
          this.users = users;
        }
      );
    }
  }

}
