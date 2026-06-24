import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from "../../../shared/button/button.component"


@Component(
{
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
}
)

export class NewTicketComponent implements AfterViewInit{

@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form') //newer signal version of ViewChild 

  // onSubmit(titleElement: HTMLInputElement) {
  //   //console.log(titleElement)
  //   console.dir(titleElement) //to get an object instead of an element
  //   const enteredTitle = titleElement.value
  //   console.log('Entered title' + enteredTitle)
  // }

  ngAfterViewInit(): void {
    console.log("After View INIT")
    console.log(this.form?.nativeElement)
  }
  onSubmit(title: string, ticketText: string) {
    console.log(title)
    console.log(ticketText)
    this.form?.nativeElement.reset();
    //this.form()?.nativeElement.reset()
  }

}
