import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  url="http://localhost:8080/user";
  constructor(private http:HttpClient) { }

  
// ==== get users=====
  users(){
    return this.http.get(this.url);
  }
 //========== 
 saveUsers(data:any){
  return this.http.post(this.url,data); 
 }
}

