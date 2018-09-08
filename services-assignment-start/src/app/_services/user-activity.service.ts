import { Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable()
export class UserActivityService {
    inactiveCount = 2;
    activeCount = 2;

    constructor(private userService: UserService) {
        userService.inactiveUserAdded.subscribe(
            (count: number) => {
                this.inactiveCount++;
                this.activeCount--;
                console.log('Inactive: ' + this.inactiveCount);
            }
        )

        userService.activeUserAdded.subscribe(
            (count: number) => {
                this.inactiveCount--;
                this.activeCount++;
                console.log('Active: ' + this.activeCount);
            }
        )
    }


}