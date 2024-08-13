import { Component } from '@angular/core';
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";
import { HeaderComponent } from "../header/header.component";
import { ServerStatusComponent } from "../server-status/server-status.component";
import { TrafficComponent } from "../traffic/traffic.component";
import { SupportTicketsComponent } from "../support-tickets/support-tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DashboardItemComponent, HeaderComponent, ServerStatusComponent, TrafficComponent, SupportTicketsComponent],
})
export class AppComponent {
}
