import {Injectable} from '@angular/core';
import {Activity} from '../models/activity.model.client';
import {User} from '../models/user.model.client';

@Injectable()
export class ActivityService {
  activities: Activity[] = [
    new Activity('1', 'act1', '', '', 'activity 1', 5),
    new Activity('2', 'act2', '', '', 'activity 2', 10),
    new Activity('3', 'act3', '', '', 'activity 3', 3)
  ];

  createActivity(activity: Activity) {
    this.activities.push(
      new Activity(
        (new Date()).getTime() + '',
        activity.name,
        activity.schedule,
        activity.location,
        activity.description,
        activity.capacity)
    );
  }

  findActivityById(actId: String) {
    return this.activities.find(function(activity) {
      return activity._id === actId;
    });
  }

  updateActivity(activity: Activity) {
    for (let i = 0; i < this.activities.length; i++) {
      if (this.activities[i]._id === activity._id) {
        this.activities[i].name = activity.name;
        this.activities[i].description = activity.description;
        this.activities[i].capacity = activity.capacity;
      }
    }
  }

  findPlayersByActivity(actId: String) {
    for (let i = 0; i < this.activities.length; i++) {
      if (this.activities[i]._id === actId) {
        return this.activities[i].players;
      }
    }
  }

  deleteActivity(actId) {
    for (let i = 0; i < this.activities.length; i++) {
      if (this.activities[i]._id === actId) {
        const j = +i;
        this.activities.splice(j, 1);
      }
    }
  }

  registerPlayer(actId: String, player: User) {
    for (let i = 0; i < this.activities.length; i++) {
      if (this.activities[i]._id === actId && !this.activities[i].players.includes(player)) {
        this.activities[i].players.push(player);
      }
    }
  }

  removePlayer(actId: String, userId: String) {
    for (let i = 0; i < this.activities.length; i++) {
      if (this.activities[i]._id === actId) {
        for (let j = 0; j < this.activities[i].players.length; j++) {
          if (this.activities[i].players[j]._id === userId) {
            const k = +j;
            this.activities[i].players.splice(k, 1);
          }
        }
      }
    }
  }
}
