import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //disables style scoping this means that the control styles.css are now global
  host: {
    class: "control"  //instead of adding the control class to every app-control selector we can add it here where it will always be used automatically
  }
})
export class ControlComponent {
  label = input.required<string>()
}
