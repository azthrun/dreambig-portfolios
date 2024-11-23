import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'dbp-navlinks',
    imports: [
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './navlinks.component.html',
    styleUrl: './navlinks.component.scss'
})
export class NavlinksComponent {

}
