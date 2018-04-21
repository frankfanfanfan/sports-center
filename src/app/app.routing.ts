import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './views/user/login/login.component';
import {RegisterComponent} from './views/user/register/register.component';
import {UserNewComponent} from './views/user/register/user-new/user-new.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {ActivityDashboardComponent} from './views/activity/activity-dashboard/activity-dashboard.component';
import {ActivityNewComponent} from './views/activity/activity-new/activity-new.component';
import {ActivityEditComponent} from './views/activity/activity-edit/activity-edit.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register/:role', component: UserNewComponent},
  {path: 'user/:uid', component: ProfileComponent},

  {path: 'user/:uid/activity', component: ActivityDashboardComponent},
  {path: 'user/:uid/activity/new', component: ActivityNewComponent},
  {path: 'user/:uid/activity/:actid', component: ActivityEditComponent}
];

export const Routing = RouterModule.forRoot(appRoutes);
