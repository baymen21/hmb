import { Component } from '@angular/core';
import { User } from '../Models';

@Component({
  selector: 'app-list-user',
  standalone: false,
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {

  personnels:User[]=[
    {"id":1, "nom":"ayman", "prenom":"bjawi", "adresse":"tinja","tel":"29283072"},
    {"id":1, "nom":"ayman", "prenom":"bjawi", "adresse":"tinja","tel":"29283072"},
    {"id":1, "nom":"ayman", "prenom":"bjawi", "adresse":"tinja","tel":"29283072"}
  ];

  display() {
  alert ("Bouton clické")
  console.log ("buton clicked")
}

}
