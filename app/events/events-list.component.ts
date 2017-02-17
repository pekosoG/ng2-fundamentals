import { Component, OnInit } from "@angular/core"
import { EventService } from "./shared/event.service"

@Component({
    template:` 
    <div>
        <h1>Upcoming Angular 2 events</h1>
        <hr>
        <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail [event]="event" (eventClick)="hanleEventClicked($event)" ></event-thumbnail>
        </div>
    </div>`
})

export class EventListComponent implements OnInit{

    events:any;

    constructor(private eventService: EventService){
     
    }

    ngOnInit(){
      this.eventService.getEvents().subscribe(events=>{this.events = events});
    }

    hanleEventClicked(data){
        console.log('got: '+data);
    }

}