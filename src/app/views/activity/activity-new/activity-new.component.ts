import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../../../services/activity.service.client';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Activity} from '../../../models/activity.model.client';

@Component({
  selector: 'app-activity-new',
  templateUrl: './activity-new.component.html',
  styleUrls: ['./activity-new.component.css']
})
export class ActivityNewComponent implements OnInit {

  user: User;
  constructor(
    private activityService: ActivityService,
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private router: Router
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

  createActivity(name, schedule, location, description, capacity) {
    if (this.user.role === 'owner') {
      const newActivity = new Activity(undefined, name, schedule, location, description, capacity);
      this.activityService.createActivity(newActivity).subscribe(
        (activity: Activity) => {
          this.router.navigate(['../..'], {relativeTo: this.activateRoute});
        }
      );
    } else {
      alert('You are not allowed to create activity.');
    }
  }

}
