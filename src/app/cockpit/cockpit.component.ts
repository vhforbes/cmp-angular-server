import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>()
  @Output('blueprintCreatedSpecial') blueprintCreated = new EventEmitter<{blueprintName:string, blueprintContent:string}>()

  newServerName = '';
  newServerContent = '';

  constructor() { }
  
  ngOnInit(): void {
  }

  onAddServer(serverName) {
    this.serverCreated.emit({
      serverName: serverName,
      serverContent: this.newServerContent,
    });
  }

  // Server Name use local references
  // Server content uses two way data binding

  onAddBlueprint(blueprintName) {
    this.blueprintCreated.emit({
      blueprintName: blueprintName,
      blueprintContent: this.newServerContent
    });
  }

}
