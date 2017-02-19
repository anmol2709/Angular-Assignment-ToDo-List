export class Task{
  date:string;
  name:string;
  description:string;
  priority:string;

  constructor(date?: string, name?: string, description?: string, priority?: string) {
    if(date&&name&&description&&priority){
      this.date = date;
      this.name = name;
      this.description = description;
      this.priority = priority;
    }
    else{
      this.date="";
      this.name="";
      this.description="";
      this.priority="low";
    }
  }
}
