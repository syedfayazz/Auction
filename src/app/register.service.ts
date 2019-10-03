import { Injectable } from '@angular/core';
// import { HttpHeaders } from '@angular/common/http';
// import { Register} from './register';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  url = "http://localhost:5000/"
  // getData = () =>{
  //   let user = JSON.parse(sessionStorage.getItem("USER"));
  //   if(user)
  //   {
  //    return user;
  //   }else{
  //     return null;
  //   }
  // }
   add = (user) =>{
     return this._http.post(this.url+'api/user/add',user);
   }


   addlogin = (user)=>{
     return this._http.post(this.url+'api/user/addlogin',user);
   }

   constructor(private _http : HttpClient,private router : Router) { }
 }
  