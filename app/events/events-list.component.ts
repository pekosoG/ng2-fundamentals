import { Component } from "@angular/core"

@Component({
    selector:"events-list",
    template:` 
    <div>
        <h1>Upcoming Angular 2 events</h1>
        <hr>
        <event-thumbnail [event]="event1" (eventClick)="hanleEventClicked($event)" #thumbnail></event-thumbnail>
        <h3>{{thumbnail.someProperty}}</h3>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
    </div>
    `
})

export class EventListComponent{

    event1={
        id:1,
        name:'Angular Connect!!!!',
        date: '9/26/2010',
        time: '10:00 am',
        price: 500.00,
        imageUrl:'app/assets/images/angularconnect-shield.png',
        location:{
            address:'1212 dt',
            city: 'GDL',
            country:'MX'
        }
    }

    hanleEventClicked(data){
        console.log('got: '+data);
    }

}