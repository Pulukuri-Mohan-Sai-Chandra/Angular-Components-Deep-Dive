import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus = 'offline'

  get statusClass(){
    return (this.currentStatus === 'online')?"status-online":(this.currentStatus === 'offline')?"status-offline":"status-unknown"
  }
}
