import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  //It has no use since we can just use :host in the dashboard-item.css file 
  // host: {
  //   class: "dashboard-item"
  // }
})
export class DashboardItemComponent {
  image = input.required<{ src: string, alt: string }>();
  title = input.required<string>();

}
