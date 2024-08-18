import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ComInputComponent } from '../com-input/com-input.component';
import { AppButtonComponent } from '../app-button/app-button.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../Types&Interfaces';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ComInputComponent, AppButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  titleInput = viewChild<ElementRef<HTMLInputElement>>('titleInput');
  requestInput = viewChild<ElementRef<HTMLTextAreaElement>>('requestInput');
  @ViewChild('form') form?:ElementRef<HTMLFormElement>
  @Output() newTicket = new EventEmitter<Ticket>();
  onSubmit() {
    let titleTmp = this.titleInput()?.nativeElement.value;
    let requestTmp = this.requestInput()?.nativeElement.value;
    if (titleTmp && requestTmp) {
      this.newTicket.emit({
        id: [new Date().getTime()].toString(),
        title: titleTmp,
        request: requestTmp,
        status: 'open',
      });
    }
    if(this.form){
      this.form.nativeElement.reset();
    }
  }
}
