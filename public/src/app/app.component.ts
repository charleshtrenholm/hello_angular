import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `{{now | date: "HH:mm:ss"}}`
})
export class AppComponent implements OnInit {
  tasks: any;
  newTask: any;
  editedTask: any;
  title: string;
  score : number
  messages: any[]
  selectedTask: any;
  public now: number
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newTask = {title: "", desc: "", completed: false}
    this.editedTask = {title: "", desc: "", completed: false}
    this.score = 0;
    this.messages = [];
    this.title = "Tasks"
    this.getTasks()
    console.log("newTask:::::", this.newTask);
    // this._httpService.newGame()
  }
  addPoints(item: string): void{
    let points: number;
    if(item == "farm"){
      points = Math.floor(Math.random() * 10) + 10;
    }
    if(item == "cave"){
      points = Math.floor(Math.random() * 5) + 5;
    }
    if(item == "house"){
      points = Math.floor(Math.random() * 3) + 2;
    }
    if(item == "casino"){
      points = Math.floor(Math.random() * 50) - Math.floor(Math.random() * 50)
    }
    console.log("POINTS --------> " + points);
    this.score += points;
    this.pointMessage(points, item);
  }
  pointMessage(points: number, item: string): void{ //for ninja gold game
    if(points < 0){
      this.now = Date.now()
      var msg = {score: 0 - points, item: item, isNeg: true, time: this.getDate()}
      this.messages.push(msg);
    } else {
      var msg = {score: points, item: item, isNeg: false, time: this.getDate()}
      this.messages.push(msg);
      console.log(this.messages, "THIS.MESSAGES");
    }
    console.log("MESSAGE: ", this.messages);
  }
  getDate(){ 
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var ddStr = String(dd);
    var mmStr = String(mm);

    var yyyy = today.getFullYear();
    if (dd < 10) {
      ddStr = '0' + dd;
    } 
    if (mm < 10) {
      mmStr = '0' + mm;
      console.log("MMSTRING : ", mmStr)
    } 
    var newTime = mmStr + '/' + ddStr + '/' + yyyy;
    return newTime;
  }

  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("WE GOT DATA>>>>> ", data);
      this.newTask = {title: "", desc: ""}
      this.getTasks();      
    })
  }
  getTasks(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("data from db>>>>", data);
      this.tasks = data;
    })
    for(var i = 0; i < this.tasks.length; i++){
      this.tasks[i].edited = false;
    }
    console.log("THIS.TASKS ---> ", this.tasks)
  }
  logNewTask(){
    console.log(this.newTask);
  }
  showEditor(id: string){
    for(var i = 0; i < this.tasks.length; i++){
      this.tasks[i].edited = false;
      if (this.tasks[i]._id == id){
        console.log(this.tasks[i]);
        this.editedTask = this.tasks[i];
        this.tasks[i].edited = true;
      }
    }
  }
  onEditSubmit(id: string){
    let observable = this._httpService.submitChange(id, this.editedTask)
    observable.subscribe(data => {
      this.tasks = data;
      this.getTasks();
    })
  }

  deleteItem(id: string){
    let observable = this._httpService.deleteItem(id);
    observable.subscribe(data => {
      this.tasks = data;
      this.getTasks();
    })
  }
  taskToShow(task: any){
    this.selectedTask = task;
  }
}
