import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Provider } from '../Models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  standalone: false,
  templateUrl: './add-provider.component.html',
  styleUrl: './add-provider.component.css'
})
export class AddProviderComponent {

  public constructor(private service: ProviderService, private router:Router) { }

   ajouterProviderBD(providerFormValue: any) {

    let provider: Provider = {
      "name": providerFormValue.name,
      "email": providerFormValue.email,
      "address": providerFormValue.address,
      id: 0
    }

    this.service.addProvider(provider).subscribe(
      data => {//console.log("Saved")
        this.router.navigate(["/providers"]);
      }
    );

  }
}
