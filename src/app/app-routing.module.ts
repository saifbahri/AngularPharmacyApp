import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproviderComponent } from './addprovider/addprovider.component';
import { EditProviderComponent } from './edit-provider/edit-provider.component';
import { ProviderpageComponent } from './providerpage/providerpage.component';

const routes: Routes = [

{path:'', component:HomeComponent,},

{path:'login' , component:UserLoginComponent},
{path:'productpage', component:ProductpageComponent},
{path:'addproduct', component:AddproductComponent},
{path:'editproduct/:id', component:EditProductComponent},
{path:'dashboard', component:DashboardComponent},
{path:'providerpage', component:ProviderpageComponent},
{path:'addprovider', component:AddproviderComponent},
{path:'editprovider', component:EditProviderComponent},



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
