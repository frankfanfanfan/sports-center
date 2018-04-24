import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../services/user.service.client';
import {ActivityService} from '../../../../services/activity.service.client';
import {Activity} from '../../../../models/activity.model.client';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.css']
})
export class PlayerDashboardComponent implements OnInit {

  user: User;
  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private activityService: ActivityService
  ) { }

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

  removeActivity(userId: String, actId: String) {
    this.activityService.removePlayer(actId, userId).subscribe();
    this.userService.quitActivity(actId, userId).subscribe(
      (activities: Activity[]) => {
        this.user.activities = activities;
      }
    );
  }

}
