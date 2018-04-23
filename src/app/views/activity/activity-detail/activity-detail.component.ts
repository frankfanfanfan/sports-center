import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {Activity} from '../../../models/activity.model.client';
import {ActivityService} from '../../../services/activity.service.client';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  user: User;
  activity: Activity;
  isPlayer: boolean;
  isOwner: boolean;
  constructor(
    private activityService: ActivityService,
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      this.user = this.userService.findUserById(params['uid']);
      this.isPlayer = this.user.role === 'player';
      this.isOwner = this.user.role === 'owner';
      this.activity = this.activityService.findActivityById(params['actid']);
      this.user.activities = this.user.activities == null ? [] : this.user.activities;
      this.user.likes = this.user.likes == null ? [] : this.user.likes;
      this.activity.players = this.activity.players == null ? [] : this.activity.players;
    });
  }

  enroll() {
    if (this.user.role === 'player') {
      this.userService.enrollActivity(this.activity, this.user._id);
      this.activityService.registerPlayer(this.activity._id, this.user);
      console.log(this.user.activities.length);
      this.router.navigate(['../..'], {relativeTo: this.activateRoute});
    } else {
      alert('Only players can enroll this activity');
    }
  }

  like() {
    if (this.user.role === 'fan') {
      this.userService.likeActivity(this.activity, this.user._id);
      this.router.navigate(['../..'], {relativeTo: this.activateRoute});
    } else {
      console.log('You are the owner, you decide');
    }
  }
}
