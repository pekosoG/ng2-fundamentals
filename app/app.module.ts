import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

import {EventsAppComponent} from './events-app.component'
import {EventListComponent} from './events/events-list.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import {EventService} from './events/shared/event.service'
import {EventDetailsComponent} from './events/events-details/event-details.component'

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
        EventDetailsComponent],
    bootstrap:[EventsAppComponent],
    providers:[EventService]
})

export class AppModule{}