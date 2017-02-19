import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Task} from '../task'
import {AppService} from "../app.service";

@Component({
  selector: 'create',
  templateUrl: './app/create/create.component.html',
  styleUrls: ['./app/create/create.component.css']
})
export class CreateComponent  {
  task:Task=new Task()
  index:number;
  constructor(private router: Router,private route: ActivatedRoute, private service:AppService) {}
  ngOnInit(){
    this.route.params.subscribe((data: any) => {
      this.index = +data.i;
      if(this.index||this.index===0){
        this.task=this.service.tasks[this.index];
      }
    });
  }
  submit(){

    if (this.index||(this.index===0)){

      this.service.delete (this.index);
      this.service.tasks.push(this.task);
      this.router.navigate(['show']);
      alert(" TASK EDITED");
    }
    else{
  this.service.tasks.push(this.task);
  this.router.navigate(['show']);
  alert("NEW TASK ADDED");
}

  }

  goHome(){
    this.router.navigate(['home']);
  }

}
