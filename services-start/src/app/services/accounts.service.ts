import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "../../../node_modules/@angular/core";

@Injectable()
export class AccountsService {
    statusUpdated = new EventEmitter<string>();
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    
    constructor(private loggingService: LoggingService) {}

      addAccount(name: string, status: string) {
        this.accounts.push({name, status});
      }

      updateAccount(updateInfo: {id: number, newStatus: string}) {
        this.accounts[updateInfo.id].status = updateInfo.newStatus;
        this.loggingService.logStatusChange(this.accounts[updateInfo.id].status);
      }
}