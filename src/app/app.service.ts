import {Injectable} from '@angular/core'
import {Task} from "./task";

@Injectable()
export class AppService{
    tasks:Task[]=[];


  add(date: string, name: string, description: string, priority: string){
    this.tasks.push(new Task(date, name, description, priority));
  }
  delete(index:any){
    this.tasks.splice(index, 1);
  }
}
