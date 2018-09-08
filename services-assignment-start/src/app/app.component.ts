import { Component } from '@angular/core';
import { UserService } from './_services/user.service';
import { UserActivityService } from './_services/user-activity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserActivityService]
})
export class AppComponent {
  inactiveUsers = [];
  activeUsers = [];

constructor(private userService: UserService,
            private userActivityService: UserActivityService) { 
  this.inactiveUsers = userService.inactiveUsers;
  this.activeUsers = userService.activeUsers
}

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
