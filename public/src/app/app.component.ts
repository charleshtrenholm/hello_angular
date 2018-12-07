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
    this.str = "charlie town harley down"
    this.first_name = "cornholio"
    this.getTasksFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("got our tasks HAHA WHAT!", data)
      this.tasks = data;
    });
  }
  
}
