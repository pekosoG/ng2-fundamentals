import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

import {EventsAppComponent} from './events-app.component'
import {EventListComponent} from './events/events-list.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import {EventService} from './events/shared/event.service'
import {EventDetailsComponent} from './events/events-details/event-details.component'
import {CreateEventComponent} from './events/create-events.omponent'

import {EventRouteActivator} from './events/events-details/event-route-activator.service'

import {Error404Component} from './errors/404.component'

import { appRoutes } from './routes'

@NgModule({
    imports:[
        BrowserModule,
        RouterModule.forRoot(appRoutes)
        ],
    declarations:[
        EventsAppComponent, 
        EventListComponent, 
        EventThumbnailComponent, 
        NavBarComponent, 
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component],
    bootstrap:[EventsAppComponent],
    providers:[
        EventService,
        EventRouteActivator,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}]
})

export class AppModule{}

function checkDirtyState(component: CreateEventComponent){
    if(component.isDirty)
        return window.confirm('save first! Sure to leave?');
    return true
    }