import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TypeUser } from '../../Models/TypeUser'; // Assurez-vous que le modèle TypeUser existe
import { TypeUserService } from '../../services/typeuser.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
 selector: 'app-add-type-user',
 templateUrl: './add-type-user.component.html',
 styleUrls: ['./add-type-user.component.css'],
 standalone: false,
})
export class AddTypeUserComponent implements OnInit {
 typeUserForm!: FormGroup ;  // Formulaire réactif pour la création du type d'utilisateur
 errorMessage: string | null = null; // Message d'erreur en cas d'échec


 constructor(
   private typeUserService: TypeUserService, // Service pour interagir avec l'API
   private router: Router, // Router pour la redirection après ajout
   private fb: FormBuilder // FormBuilder pour créer et gérer le formulaire
 ) {


 }


 ngOnInit(): void {
// Initialisation du formulaire avec des validations strictes
   this.typeUserForm = this.fb.group({
     libelleAr: ['', [
       Validators.required, // Champ obligatoire
       Validators.minLength(3), // Minimum 3 caractères
       Validators.pattern(/^[\u0600-\u06FF0-9\s]+$/), // ✅ Autorise uniquement l'arabe et les chiffres
     ],
     ],
     libelleFr: [
       '',
       [
         Validators.required, // Champ obligatoire
         Validators.minLength(3), // Minimum 3 caractères
         Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s]+$/), // ✅ Autorise uniquement le français et les chiffres
       ],
     ],
   });  }


 /**
  * Méthode appelée lors de la soumission du formulaire.
  * Vérifie la validité du formulaire avant d'envoyer les données.
  */
 onSubmit() {
   // Vérifie si le formulaire est invalide et affiche un message d'erreur
   if (this.typeUserForm.invalid) {
     alert('Le formulaire est invalide. Veuillez vérifier les champs.');
     return; // Arrête l'exécution de la méthode
   }


   this.errorMessage = null; // Réinitialise le message d'erreur


   // Création d'un objet TypeUser avec les valeurs du formulaire
   const newTypeUser: TypeUser = {
     libelleAr: this.typeUserForm.value.libelleAr,
     libelleFr: this.typeUserForm.value.libelleFr,
   };


   // Envoi des données au service pour création
   this.typeUserService.create(newTypeUser).subscribe({
     next: () => {
       alert('Type d\'utilisateur ajouté avec succès !'); // Message de confirmation
       this.router.navigate(['/typeUser/listTypeUser']); // Redirection vers la liste
     },
     error: (err) => {
       this.errorMessage = 'Échec de l\'ajout du type d\'utilisateur. Veuillez réessayer.'; // Affiche un message d'erreur
       console.error('Erreur:', err); // Affiche l'erreur dans la console pour le débogage
     },
   });
 }
}
