import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
/*   template: `
  <app-server></app-server>
  <app-server></app-server>  
  `, */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = 'Empty';
  serverCreated = false;


  constructor() { 
    setInterval(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server created - " + this.serverName;
  }
  onUpdateServerName(event: Event) {
    //console.log(event);
    //this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
