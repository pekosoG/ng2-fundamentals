import { Component } from '@angular/core'

@Component({
    selector:'nav-bar',
    templateUrl:'app/nav/navbar.component.html',
    styles:[`
        .nav.navbar-nav {font-size: 15px;}
        #searcgForm {margin-right:100px;}
        @media (max-width:1200px){#searchform {display:none}}
        `
    ]
})

export class NavBarComponent{

}