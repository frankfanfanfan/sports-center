import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {Activity} from '../models/activity.model.client';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()
export class UserService {

  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  createUser(user: User) {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map((response: Response) => {
        return response.json();
      });
  }

  findAllUsers() {
    const url = this.baseUrl + '/api/user';
    return this.http.get(url).map(
      (response: Response) => {
        return response.json();
      }
    );
  }


  findUserByCredential(username: String, password: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateUser(user: User) {
    const url =  this.baseUrl + '/api/user/' + user._id;
    return this.http.put(url, user).map((response: Response) => {
      return response.json();
    });
  }

  deleteUser(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  enrollActivity(activity: Activity, userId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/activity';
    return this.http.put(url, activity)
      .map((response: Response) => {
        return response.json();
      });
  }

  quitActivity(actId: String, userId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/activity/' + actId;
    return this.http.delete(url).map(
      (response: Response) => {
        return response.json();
      });
  }

  likeActivity(activity: Activity, userId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/like';
    return this.http.put(url, activity)
      .map((response: Response) => {
        return response.json();
      });
  }

  dislikeActivity(actId: String, userId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/like/' + actId;
    return this.http.delete(url).map(
      (response: Response) => {
        return response.json();
      });
  }
}
