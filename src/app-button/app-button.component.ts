import { encapsulateStyle } from '@angular/compiler';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.css',
})
export class AppButtonComponent {

}
