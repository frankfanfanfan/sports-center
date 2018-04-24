import {Injectable} from '@angular/core';
import {Activity} from '../models/activity.model.client';
import {User} from '../models/user.model.client';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class ActivityService {

  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  createActivity(activity: Activity) {
    const url = this.baseUrl + '/api/activity';
    return this.http.post(url, activity)
      .map((response: Response) => {
        return response.json();
      });
  }

  findActivityById(actId: String) {
    return this.http.get(this.baseUrl + '/api/activity/' + actId)
      .map((response: Response) => {
        return response.json();
      });
  }

  findAllActivities() {
    const url = this.baseUrl + '/api/activity';
    return this.http.get(url).map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  updateActivity(activity: Activity) {
    const url =  this.baseUrl + '/api/activity/' + activity._id;
    return this.http.put(url, activity).map((response: Response) => {
      return response.json();
    });
  }

  // findPlayersByActivity(actId: String) {
  //   for (let i = 0; i < this.activities.length; i++) {
  //     if (this.activities[i]._id === actId) {
  //       return this.activities[i].players;
  //     }
  //   }
  // }

  deleteActivity(actId) {
    const url = this.baseUrl + '/api/activity/' + actId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  registerPlayer(actId: String, player: User) {
    const url = this.baseUrl + '/api/activity/' + actId + '/player';
    return this.http.put(url, player)
      .map((response: Response) => {
        return response.json();
      });
  }

  removePlayer(actId: String, userId: String) {
    const url = this.baseUrl + '/api/activity/' + actId + '/player/' + userId;
    return this.http.delete(url).map(
      (response: Response) => {
        return response.json();
      });
  }
}
