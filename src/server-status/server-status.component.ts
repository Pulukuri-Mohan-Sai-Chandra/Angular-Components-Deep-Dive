import { Component, Input, OnInit } from '@angular/core';
const status = ['online', 'offline', 'unknown']
let index = 0;
@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})

export class ServerStatusComponent implements OnInit{
  currentStatus = 'online'
  ngOnInit(){
    setInterval(() => {
      this.currentStatus = status[index % 3];
      index++;
    }, 8000)
  }
}
