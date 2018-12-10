import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    //  this.getTasks();
   }
  getTasks(){
    return this._http.get('/tasks');
  }
  addTask(newtask){
    return this._http.post('/tasks', newtask);
  } 
  submitChange(id, body){
    return this._http.put('/tasks/'+id, body);
  }
  deleteItem(id){
    return this._http.delete('/tasks/'+id)
  }
}
