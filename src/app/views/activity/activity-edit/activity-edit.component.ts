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
      this.user = this.userService.findUserById(params['uid']);
      this.activity = this.activityService.findActivityById(params['actid']);
    });
  }

  updateActivity(activity) {
    this.activityService.updateActivity(activity);
  }

  deleteActivity(actId) {
    this.activityService.deleteActivity(actId);
    this.router.navigate(['../../..'], {relativeTo: this.activateRoute});
  }

}
