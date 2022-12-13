import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../produit-service.service';
import { Produit } from '../Produit';
import { ActivatedRoute } from '@angular/router';
import { Marque } from '../Marque';
import { Categorie } from '../Categorie';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  prd : Produit = new Produit();
  categories: Array <Categorie> = [];
  marques: Array <Marque> = [];
  id:number;

  constructor(private prdService:ProduitServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.prdService.getAllCategories().subscribe(res => {
      this.categories= res;
      });
   
      this.prdService.getAllMarques().subscribe(res => {
        this.marques= res;
        });
     


    this.id = this.route.snapshot.params['id']

  this.prdService.getprdbyid(this.id).subscribe(res => {
    this.prd= res;
    });
  }

}
