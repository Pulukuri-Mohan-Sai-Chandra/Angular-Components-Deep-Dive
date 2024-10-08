import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'com-input',
  standalone: true,
  imports: [],
  templateUrl: './com-input.component.html',
  styleUrl: './com-input.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{
    class:'control'
  }
})
export class ComInputComponent {
  title = input.required<string>();
}
