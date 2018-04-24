import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Activity} from '../../../models/activity.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {ActivityService} from '../../../services/activity.service.client';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {

  user: User;
  activity: Activity;
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
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
      this.activityService.findActivityById(params['actid']).subscribe(
        (activity: Activity) => {
          this.activity = activity;
        }
      );
    });
  }

  updateActivity(newActivity) {
    this.activityService.updateActivity(newActivity).subscribe(
      (activity: Activity) => {
        this.activity = activity;
      }
    );
  }

  deleteActivity(actId) {
    this.activityService.deleteActivity(actId).subscribe();
    this.router.navigate(['../../..'], {relativeTo: this.activateRoute});
  }

}
