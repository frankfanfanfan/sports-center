import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../services/user.service.client';
import {ActivityService} from '../../../../services/activity.service.client';
import {Activity} from '../../../../models/activity.model.client';

@Component({
  selector: 'app-fan-dashboard',
  templateUrl: './fan-dashboard.component.html',
  styleUrls: ['./fan-dashboard.component.css']
})
export class FanDashboardComponent implements OnInit {

  user: User;
  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute,
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

  dislikeActivity(userId: String, actId: String) {
    this.userService.dislikeActivity(actId, userId).subscribe(
      (likes: Activity[]) => {
        this.user.likes = likes;
      }
    );
  }

}
