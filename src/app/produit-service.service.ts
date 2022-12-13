import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from './Categorie';
import { Produit } from './Produit';
import { Marque } from './Marque';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  http: any;

  constructor(private httpClient: HttpClient) { }




getAll(): Observable<Array<Produit>> {
  return this.httpClient.get<Array<Produit>>("http://127.0.0.1:9090/Produits/GetAllProduits");
  }
  
Addprd(prd:Produit ):Observable<Produit>{
  return this.httpClient.post<Produit>("http://127.0.0.1:9090/Produits/AddProduit",prd)
}
  
getAllCategories(): Observable<Array<Categorie>> {
  return this.httpClient.get<Array<Categorie>>("http://127.0.0.1:9090/Categories/GetAllCategories");
  }
  

  getAllMarques(): Observable<Array<Marque>> {
    return this.httpClient.get<Array<Marque>>("http://127.0.0.1:9090/Laboratoires/GetAllLaboratoires");
    }  


    getprdbyid( id:number):Observable<Produit>{
      return this.httpClient.get<Produit>(`http://127.0.0.1:9090/Produits/GetProduitById/${id}`);
    }


}
