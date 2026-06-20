import { AfterViewInit, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  //This is a typescript feature called literal types

  //private interval?: ReturnType<typeof setInterval>;

  //NodeJS.Timeout;
  // Or ReturnType<typeof setInterval>; advanced typescript

  //is used to add a listener to the component you inject it in that will trigger a function when the component is about to be destroyed 
  private destroyRef = inject(DestroyRef);


  constructor() {

  }

  ngOnInit() {
    console.log("On Init")
    //the setInterval function returns an object of type NodeJS.Timeout which is an ID of this interval which can be used to clean up this interval
    const interval = setInterval(() => {
      const rand = Math.random()

      if (rand < 0.5) {
        this.currentStatus = 'online'
      }
      else if (rand < 0.9) {
        this.currentStatus = 'offline'
      }
      else {
        this.currentStatus = 'unknown'
      }
    }, 5000)  //execute this function every 5 secs

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

  ngAfterViewInit() {
    console.log("After View Init")
  }

  //used to stop the function "setInterval" when the component is destoried to potentially prevent memory leaks
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
