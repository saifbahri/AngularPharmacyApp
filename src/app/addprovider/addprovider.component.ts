import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-addprovider',
  templateUrl: './addprovider.component.html',
  styleUrls: ['./addprovider.component.css']
})
export class AddproviderComponent implements OnInit {

  provider:Provider=new Provider();

  constructor(private providerService:ProviderService){ }

  ngOnInit(): void {
  }
  providerAdd(){
    this.providerService.Addprovider(this.provider).subscribe(data=>{
       alert("Added  successfuly") }, error=>alert("sorry failed")   )
    }
}
