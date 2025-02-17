import { ProviderService } from './../services/provider.service';
import { Component, OnInit } from '@angular/core';
import { Provider } from '../Models';


@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.component.html',
  styleUrl: './list-providers.component.css'
})
export class ListProvidersComponent implements OnInit{
  providers:Provider[]=[];
  constructor (private service:ProviderService){
     // console.log("c'est le constructeur")
    }
  ngOnInit(): void {
    this.service.getProviders().subscribe(
      (data)=>
      {
        this.providers=data;
        //console.log(this.employers)
      }
    );
  }
}

