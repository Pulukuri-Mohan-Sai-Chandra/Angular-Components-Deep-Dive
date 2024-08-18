import { Component, input, output, EventEmitter } from '@angular/core';
import { Ticket } from '../Types&Interfaces';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  currentTicket = input.required<Ticket>();
  ticketUpdated = output<Ticket>();
  reopenTicket = output<Ticket>();
  ticketExpand = false;

  ticketCompleted(){
    this.currentTicket().status = 'closed';
    this.ticketUpdated.emit(this.currentTicket());
  }

  reOpenTicket(){
    this.reopenTicket.emit(this.currentTicket());
  }
  toggleTicket(){
    this.ticketExpand = !this.ticketExpand
  }
}
