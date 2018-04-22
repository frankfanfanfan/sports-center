import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ActivityDashboardComponent } from './views/activity/activity-dashboard/activity-dashboard.component';
import { ActivityNewComponent } from './views/activity/activity-new/activity-new.component';
import { ActivityEditComponent } from './views/activity/activity-edit/activity-edit.component';
import { FanDashboardComponent } from './views/user/fan/fan-dashboard/fan-dashboard.component';
import { FanNewComponent } from './views/user/fan/fan-new/fan-new.component';
import { FanEditComponent } from './views/user/fan/fan-edit/fan-edit.component';
import { OwnerDashboardComponent } from './views/user/owner/owner-dashboard/owner-dashboard.component';
import { OwnerNewComponent } from './views/user/owner/owner-new/owner-new.component';
import { OwnerEditComponent } from './views/user/owner/owner-edit/owner-edit.component';
import { PlayerDashboardComponent } from './views/user/player/player-dashboard/player-dashboard.component';
import { PlayerNewComponent } from './views/user/player/player-new/player-new.component';
import { PlayerEditComponent } from './views/user/player/player-edit/player-edit.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routing} from './app.routing';
import { UserNewComponent } from './views/user/register/user-new/user-new.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import {UserService} from './services/user.service.client';
import {ActivityService} from './services/activity.service.client';
import { UserEditComponent } from './views/user/user-edit/user-edit.component';
import { ActivityDetailComponent } from './views/activity/activity-detail/activity-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivityDashboardComponent,
    ActivityNewComponent,
    ActivityEditComponent,
    FanDashboardComponent,
    FanNewComponent,
    FanEditComponent,
    OwnerDashboardComponent,
    OwnerNewComponent,
    OwnerEditComponent,
    PlayerDashboardComponent,
    PlayerNewComponent,
    PlayerEditComponent,
    LoginComponent,
    RegisterComponent,
    UserNewComponent,
    ProfileComponent,
    UserEditComponent,
    ActivityDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [UserService, ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
