import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addContact(data){
    const url = "http:";
    return this.http.post(url,data)
  }

  getContact(){
    const url = "http://";
    return this.http.get(url)
  }

  deleteContact(id){
    let url ="http://"+id
    return this.http.delete(url)
  }
}
