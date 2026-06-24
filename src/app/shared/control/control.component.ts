import { Component, HostBinding, HostListener, input, ViewEncapsulation, ElementRef, inject, ContentChild, contentChild, AfterContentInit } from '@angular/core';

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
export class ControlComponent implements AfterContentInit {
  //  @HostBinding('class') className = 'control';  //Alternative to the host property but it is discourged and it is only available for compatility reasons
  /* alternative to event binding using host property
  @HostListener('click')   onClick() {
    console.log('Clicked!')
  }
  
  */

  private el = inject(ElementRef)
  label = input.required<string>()
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  //private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

ngAfterContentInit(): void {
  //...
}


  onClick() {
    console.log('Clicked!')
    console.log(this.el)
    console.log(this.control)
    //console.log(this.control())

  }
}
