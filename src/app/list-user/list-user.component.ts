import { Component } from '@angular/core';
import { Usertest } from '../Models';

@Component({
  selector: 'app-list-user',
  standalone: false,
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {

  personnels:Usertest[]=[
    {"id1":1, "nom":"ayman", "prenom":"bjawi", "adresse":"tinja","tel":"29283072"},
    {"id1":1, "nom":"ayman", "prenom":"bjawi", "adresse":"tinja","tel":"29283072"},
    {"id1":1, "nom":"ayman", "prenom":"bjawi", "adresse":"tinja","tel":"29283072"}
  ];

  display() {
  alert ("Bouton clické")
  console.log ("buton clicked")
}

}
