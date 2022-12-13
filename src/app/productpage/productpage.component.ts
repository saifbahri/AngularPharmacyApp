import { Component, OnInit } from '@angular/core';
import { Produit } from '../Produit';
import { ProduitServiceService } from '../produit-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  produits: Array <Produit> = [];

  constructor(private prdService:ProduitServiceService,private router:Router) { }

  ngOnInit(): void {
    this.prdService.getAll().subscribe(res => {
      this.produits= res;
      });
   
  }


  updateEmployee(id:number){
    this.router.navigate(['/editproduct',id]);
  }
  
     
    

 
      

    

}
