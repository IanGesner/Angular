import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output()
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output()
  blueprintCreated= new EventEmitter<{blueprintName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: string, serverContent: string) {
    this.serverCreated.emit({
      serverName: serverName,
      serverContent: serverContent
    });
  }

  onAddBlueprint(serverName: string, serverContent: string) {
    this.blueprintCreated.emit({
      blueprintName: serverName,
      serverContent: serverContent
    });
  }
}
