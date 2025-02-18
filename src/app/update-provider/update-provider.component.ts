import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-update-provider',
  standalone: false,
  templateUrl: './update-provider.component.html',
  styleUrl: './update-provider.component.css'
})
export class UpdateProviderComponent implements OnInit{

  public id:any;
  public name:any;
  public email:any;
  public address:any;

  constructor(private activeRoute:ActivatedRoute, private service:ProviderService, private router:Router){}

  ngOnInit(): void {
  this.activeRoute.paramMap.subscribe(
    params => {this.id = params.get('id');
      //console.log(this.id)

      this.service.getProviderById(this.id).subscribe(
        (data:any) => {
          this.name = data["name"]
          this.address = data["address"]
          this.email = data["email"]
        }
      );
    }
  )
  }

  updateProvider() {

    let provider = {
      "id": this.id,
      "name": this.name,
      "address": this.address,
      "email": this.email
    };

    this.service.updateProvider(provider).subscribe(
      response => {
        this.router.navigate(['providers']);
      }
    );
  }

}
