import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlaskApiService {

  constructor(private httpClient:HttpClient){}
  public apigetData()
  {
    
    return this.httpClient.get("http://localhost:5000/sign_Up");
  }
    

  
  
}
