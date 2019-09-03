import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TouchSequence } from 'selenium-webdriver';
@Injectable({
  providedIn: 'root'
})
export class ProfeService {
private username:string;

private clientsecret='e3fee779ae2a9a45828ea5b28b09466b91140485';
  constructor(private http:HttpClient) { 
    console.log("service is ready");
    this.username = 'umwalidiane69';

//   }
//   getProfileInfo(){
//     return this.http.get("https://api.github.com/users/"
//      + this.username + "?access_token="+ this.clientsecret)
    
// }
// getProfileRepos(){
//   return this.http.get("https://api.github.com/users/"
//   + this.username + "/repos?access_token="+ this.clientsecret)
// }
// updateProfile(username){
// this.username = username;
// }
// }