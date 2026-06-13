import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //disables style scoping this means that the control styles.css are now global
  host: {
    class: "control",  //instead of adding the control class to every app-control selector we can add it here where it will always be used automatically
    '(click)': 'onClick()'
    // Example of event binding using host property
  }
})
export class ControlComponent {
  //  @HostBinding('class') className = 'control';  //Alternative to the host property but it is discourged and it is only available for compatility reasons
  /* alternative to event binding using host property
  @HostListener('click')   onClick() {
    console.log('Clicked!')
  }
  
  */
  label = input.required<string>()

  onClick() {
    console.log('Clicked!')
  }
}
