import { Routes } from '@angular/router'
import { EventListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/events-details/event-details.component'

export const appRoutes = [
    {path: 'events', component: EventListComponent},
    {path: 'events/:id', component: EventDetailsComponent},
    {path: '', redirectTo: 'events', pathMatch:'full'}
]