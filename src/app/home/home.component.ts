import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html',
    styleUrls: ['./app/home/home.component.css']
})
export class HomeComponent {
    constructor(private router: Router) {}

    createTask(){

        this.router.navigate(['create'])
    }

    showTask(){

        this.router.navigate(['show'])
    }
}
