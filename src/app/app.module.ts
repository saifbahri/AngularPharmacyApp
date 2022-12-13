import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproviderComponent } from './addprovider/addprovider.component';
import { EditProviderComponent } from './edit-provider/edit-provider.component';
import { ProviderpageComponent } from './providerpage/providerpage.component';



@NgModule({
  declarations: [
    
    AppComponent,
    UserLoginComponent,
    HomeComponent,
    ProductpageComponent,
    AddproductComponent,
    EditProductComponent,
    DashboardComponent,
    AddproviderComponent,
    EditProviderComponent,
    ProviderpageComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
