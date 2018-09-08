import { EventEmitter } from "@angular/core";

export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  activeUserAdded = new EventEmitter<number>();
  inactiveUserAdded = new EventEmitter<number>();

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.inactiveUserAdded.emit(this.inactiveUsers.length);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.activeUserAdded.emit(this.activeUsers.length);
  }
}