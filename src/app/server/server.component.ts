import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    //styleUrls: ['./server.component.css']
    styles: [`
      .online {
        color: white;
      }
    `]
  })
  export class ServerComponent {
    serverId = 10;
    serverState = 'offline';

    constructor() {
      this.serverState = Math.random() > 0.5 ? 'offline' : 'online';
    }
    
    getServerState() {
      return this.serverState;
    }

    getColor() {
      return this.serverState == "offline" ? 'red' : 'green';
    }
  }