import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Task} from "../task";
import {AppService} from "../app.service";

@Component({
  selector: 'show',
  templateUrl: './app/show/show.component.html',
  styleUrls: ['./app/show/show.component.css']
})
export class ShowComponent implements OnInit{
  tasks:Task[];
  constructor(private router: Router, private service: AppService) {}
  ngOnInit() {
    this.tasks = this.service.tasks;
  }

  edit(i:number){
    alert("Editing task: "+this.tasks[i].name)
    this.router.navigate(['edit',i])
  }
  done(i:any){
    alert("Deleting task: "+this.tasks[i].name)
    this.service.tasks.splice(i, 1);
  }
  goHome(){
    this.router.navigate(['home']);
  }
}
