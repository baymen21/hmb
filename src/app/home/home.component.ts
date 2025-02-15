import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nom:string="Ayman BJAWI"
formation="Angular & DotNet"
names:string[]=["ayman", "nesrine", "amine", "lina"]
}
