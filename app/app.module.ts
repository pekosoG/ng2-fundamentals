import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

import{
    EventListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index'

import {EventsAppComponent} from './events-app.component'
import {NavBarComponent} from './nav/navbar.component'


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
        EventListResolver,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}]
})

export class AppModule{}

function checkDirtyState(component: CreateEventComponent){
    if(component.isDirty)
        return window.confirm('save first! Sure to leave?');
    return true
    }