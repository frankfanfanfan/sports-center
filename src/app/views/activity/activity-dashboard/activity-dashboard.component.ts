import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Activity} from '../../../models/activity.model.client';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {ActivityService} from '../../../services/activity.service.client';

@Component({
  selector: 'app-activity-dashboard',
  templateUrl: './activity-dashboard.component.html',
  styleUrls: ['./activity-dashboard.component.css']
})
export class ActivityDashboardComponent implements OnInit {

  user: User;
  activities: Activity[];
  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private activityService: ActivityService
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
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
    });
  }

}
