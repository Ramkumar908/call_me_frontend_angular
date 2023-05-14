import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})
export class userService
{
    constructor(private httpClient:HttpClient){}
   
    url:any="http://localhost:8100";

    userRegister(req:any)
    {
     return this.httpClient.post(`${this.url}/register`,req);
    }
    userLogin(req:any)
    {
        return this.httpClient.post(`${this.url}/authenticate`,req);
    }
    userForgotPasswot(req:any)
    {
        return this.httpClient.post(`${this.url}/user/forgotPassword`,req)
    }
}
