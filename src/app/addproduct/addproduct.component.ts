import { Component, OnInit } from '@angular/core';
import { Categorie } from '../Categorie';
import { Produit } from '../Produit';
import { ProduitServiceService } from '../produit-service.service';
import { Marque } from '../Marque';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

 prd:Produit=new Produit();
 categories: Array <Categorie> = [];
 marques: Array <Marque> = [];
  constructor(private prdService:ProduitServiceService) { }

  ngOnInit(): void {

    this.prdService.getAllCategories().subscribe(res => {
      this.categories= res;
      });
   
      this.prdService.getAllMarques().subscribe(res => {
        this.marques= res;
        });
     
  }
  productAdd(){
    this.prdService.Addprd(this.prd).subscribe(data=>{
       alert("Added  successfuly") }, error=>alert("sorry failed")   )
    }
   
}
