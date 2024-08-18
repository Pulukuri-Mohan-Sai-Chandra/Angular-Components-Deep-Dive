import { Component } from '@angular/core';
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";
import { HeaderComponent } from "../header/header.component";
import { ServerStatusComponent } from "../server-status/server-status.component";
import { TrafficComponent } from "../traffic/traffic.component";
import { TicketsComponent } from "../tickets/tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DashboardItemComponent, HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent],
})
export class AppComponent {
}

