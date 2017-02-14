import { Component,Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector:'event-thumbnail',
    template:`
        <div class="well hoverwell thumbnail">
                <h2>{{event?.name}}</h2>
                <div>Date: {{event?.date}}</div>
                <div [ngSwitch]="event?.time" [style.color]="event?.time==='8:00 am'?'#003300':''">
                    Time: {{event?.time}}
                    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                    <span *ngSwitchCase="'9:00 am'">(Normal Start)</span>
                </div>
                <div>Price: \${{event?.price}}</div>
                <div [hidden]="!event?.location">
                    <span>Location: {{event?.location.address}}</span>
                </div>
                <button class="btn btn-primary" (click)="handleClickMe()" >Click Me!</button>
        </div>
    `,
    styles:[`
        .green{color: #003300 !important}
        .bold{ font-weight:bold}
    `]
})

export class EventThumbnailComponent{
    @Input() event:any

    someProperty:string='somethin here'

    @Output() eventClick = new EventEmitter();

    handleClickMe(){
        this.eventClick.emit('yassss')
    }

    logFoo(){
        console.log('log foo');
    }

    getStartTimeClass(){
        if(this.event && this.event.time === '8:00 am')
            return ['green','bold']
        return []
    }
}