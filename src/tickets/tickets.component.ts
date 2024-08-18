import { Component, effect, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { Ticket } from '../Types&Interfaces';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';
import { TicketComponent } from "../ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent implements OnInit{

  tickets?:Ticket[];
  ngOnInit(): void {
      let localTickets = localStorage.getItem('tickets')
      if(localTickets == 'undefined' || localTickets == null){
        this.tickets = []
      }
      else{
        this.tickets = JSON.parse(localTickets);
      }
  }

  onNewTicket(ticket:Ticket){
    this.tickets?.push(ticket);
    localStorage.setItem("tickets",JSON.stringify(this.tickets));
  }

  ticketUpdated(updated_ticket:Ticket){
    this.tickets = this.tickets?.map((ticket:Ticket) => {
        if(ticket.id === updated_ticket.id){
          ticket.status = 'closed';
        }
        return ticket
    })
  }
  reOpenTicket(modification_ticket:Ticket){
    this.tickets?.map((ticket:Ticket)=>{
      if(modification_ticket.id == ticket.id){
        ticket.status='open';
      }
      return ticket;
    })
  }
}
