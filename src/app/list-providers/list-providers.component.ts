import { ProviderService } from './../services/provider.service';
import { Component, OnInit } from '@angular/core';
import { Provider } from '../Models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.component.html',
  styleUrl: './list-providers.component.css'
})
export class ListProvidersComponent implements OnInit{

  providers:Provider[]=[];
    constructor(private service:ProviderService, private router:Router){
    }

  ngOnInit(): void {
   this.loadProvider();
  }

  deleteProvider(provider:any){
    this.service.deleteProvider(provider.id).subscribe(
      data=>this.loadProvider()
    );
  }

  updateProvider(provider:any){
this.router.navigate((["/updateProvider",provider.id]))
  }
  loadProvider(){
    this.service.getProviders().subscribe(
      (data) =>
         {
           //console.log(data)
           this.providers = data;
           //console.log(this.employers)
         }
     );
  }
}
