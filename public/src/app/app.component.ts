import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Charlie Land';
  tasks = []
  num: number;
  randNum: number;
  str: string;
  first_name: string
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.num = 7;
    this.randNum = Math.floor((Math.random() * 10) + 1)
    this.first_name = "cornholio"
    this.str = ""
    // this.getTasksFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      // console.log("got our tasks HAHA WHAT!", data)
      // this.tasks = data;
      for(var i = 0; i<data.length; i++){
        let task = {viewed: false, data: data[i]};
        this.tasks.push(task)
      }
      console.log(this.tasks, "THeSE ARE THE TASKS MY GUY")
    });
  }
  onButtonClick(): void {
    console.log('click event is working')
  }
  onButtonClickParam(num: number): void {
    console.log(`click event is working with num param ${num}`);
  }
  onButtonClickParams(num: number, str: string): void {
    console.log(`click event IS WORKING with num param ${num} and str param ${str}`);
  }
  onButtonClickEvent(event: any): void {
    console.log(`click event is wOrKiNg with event ${event}`);
  }
  showTaskDesc(id: string): void {
    for (var i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].data._id == id){
        this.tasks[i].viewed = true
      } else {
        console.log(`${this.tasks[i].data.title} is the thing im trying to hide`)
        this.tasks[i].viewed = false
      }
    }
  }
  lookUpTask(event: any){
    // console.log(event);
    if(event.key == "Backspace"){
      this.str = this.str.substring(0, this.str.length - 1);
    } else {
    this.str += event.key
  }
  this.showTaskDesc(this.str);
  }
  
}
