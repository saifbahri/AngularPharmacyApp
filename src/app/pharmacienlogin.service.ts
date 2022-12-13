import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pharmacien } from './pharmacien';

@Injectable({
  providedIn: 'root'
})
export class PharmacienloginService {

  constructor(private httpClient: HttpClient) { }
  


  loginuser(pharmacien:Pharmacien):Observable<object>
  {
    return this.httpClient.post("http://127.0.0.1:9090/Pharmaciens/Login",pharmacien)
    
  }

  registeruser(pharmacien:Pharmacien):Observable<object>
  {
    return this.httpClient.post("http://127.0.0.1:9090/Pharmaciens/AddPharmacien",pharmacien)
    
  }
}
