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
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => {
    //   console.log("got our tasks!", data)
    //   for (var i in data){
    //     this.getOneTask(data[i]._id)
    //     this.getPokemon(60);

    //   }
    // });
    return this._http.get('/tasks');
  }
  getOneTask(id){
    let tempObservable = this._http.get('/tasks/'+id);
    tempObservable.subscribe(data => {
      console.log("got our one specific task", data);
    });
  }
  getPokemon(num){
    let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/'+ num +'/');
    tempObservable.subscribe(data => {
      console.log("got a pokemon as well", data.name)
    });
  }
}
