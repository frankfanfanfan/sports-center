import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';


@Injectable()
export class UserService {
  users: User[] = [
    new User('1', 'o1', 'o1', 'owner', '', '', '', '', ''),
    new User('2', 'f1', 'f1', 'fan', '', '', '', '', ''),
    new User('3', 'p1', 'p1', 'player', '', '', '', '', ''),
    new User('4', 'f2', 'f2', 'fan', '', '', '', '', '')
  ];

  createuser(user: User) {
    this.users.push(
      new User(
        (new Date()).getTime() + '',
        user.username,
        user.password,
        user.role,
        user.email,
        user.phone,
        user.firstName,
        user.lastName,
        user.description)
    );
  }

  findUserById(userId: String) {
    return this.users.find(function(user) {
      return user._id === userId;
    });
  }

  fincUserByCredential(username: String, password: String) {
    return this.users.find(function(user) {
      return user.username === username && user.password === password;
    });
  }

  updateUser(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === user._id) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
        return this.users[i];
      }
    }
  }

  findActivitiesByUser(userId: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        return this.users[i].activities;
      }
    }
  }

  findLikesByUser(userId: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        return this.users[i].likes;
      }
    }
  }

  deleteUser(userId: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        const j = +i;
        this.users.splice(j, 1);
      }
    }
  }
}
