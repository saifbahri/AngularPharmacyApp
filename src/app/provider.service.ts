import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider} from './provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  http: any;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<Provider>> {
    return this.httpClient.get<Array<Provider>>("http://127.0.0.1:9090/Fournisseurs/GetAllFournisseurs");
    }

    Addprovider(provider:Provider ):Observable<Provider>{
      return this.httpClient.post<Provider>("http://127.0.0.1:9090/Fournisseurs/AddFournisseur",provider)
    }
}
