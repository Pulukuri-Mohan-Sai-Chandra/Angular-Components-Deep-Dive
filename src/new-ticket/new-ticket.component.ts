import { Component } from '@angular/core';
import { ComInputComponent } from "../com-input/com-input.component";
import { AppButtonComponent } from '../app-button/app-button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ComInputComponent,AppButtonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
