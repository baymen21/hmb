import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  nom:string="Ayman BJAWI"
formation="Angular & DotNet"
names:string[]=["ayman", "nesrine", "amine", "lina"]
}
