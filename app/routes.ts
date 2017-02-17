import { Routes } from '@angular/router'
import { EventListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/events-details/event-details.component'
import { CreateEventComponent } from './events/create-events.omponent'
import {Error404Component} from './errors/404.component'
import {EventRouteActivator} from './events/events-details/event-route-activator.service'
import {EventListResolver} from './events/events-list-resolver.service'

export const appRoutes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path: 'events', component: EventListComponent, resolve: {events: EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch:'full'}
]