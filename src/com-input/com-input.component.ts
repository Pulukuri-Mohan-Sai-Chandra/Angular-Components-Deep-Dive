import { Component, input } from '@angular/core';

@Component({
  selector: 'com-input',
  standalone: true,
  imports: [],
  templateUrl: './com-input.component.html',
  styleUrl: './com-input.component.css'
})
export class ComInputComponent {
  title = input.required<string>();
}
