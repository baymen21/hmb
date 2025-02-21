import { Component, OnInit } from '@angular/core';
import { TypeUserService } from '../../services/typeuser.service';
import { TypeUser } from '../../Models/TypeUser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-type-user',
  standalone: false,
  templateUrl: './list-type-user.component.html',
  styleUrl: './list-type-user.component.css'
})
export class ListTypeUserComponent implements OnInit {
  typeUsers: TypeUser[] = []; // Liste des types d'utilisateurs
  errorMessage: string | null = null; // Message d'erreur

  editForm: FormGroup; // Formulaire de modification
  selectedTypeUser: TypeUser | null = null; // Type utilisateur sélectionné pour l'édition

  constructor(
    private typeUserService: TypeUserService, // Service pour interagir avec l'API
    protected modalService: NgbModal, // Service pour gérer les modales
    private fb: FormBuilder, // FormBuilder pour construire le formulaire
    private router: Router // Router pour la navigation
  ) {
    // Initialisation du formulaire d'édition avec validations
    this.editForm = this.fb.group({
      libelleAr: [
        '',
        [
          Validators.required, // Champ obligatoire
          Validators.minLength(3), // Minimum 3 caractères
          Validators.pattern(/^[\u0600-\u06FF0-9\s]+$/), // ✅ Accepte l'arabe et les chiffres
        ],
      ],
      libelleFr: [
        '',
        [
          Validators.required, // Champ obligatoire
          Validators.minLength(3), // Minimum 3 caractères
          Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s]+$/), // ✅ Accepte le français et les chiffres
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.loadTypeUsers(); // Charger les types d'utilisateurs au démarrage
  }

  /**
   * Charger tous les types d'utilisateurs
   */
  loadTypeUsers() {
    this.typeUserService.getAll().subscribe({
      next: (data) => {
        this.typeUsers = data;
      },
      error: (err) => {
        this.errorMessage = "Échec du chargement des types d'utilisateurs.";
        console.error('Erreur:', err);
      }
    });
  }

  /**
   * Supprimer un type d'utilisateur
   * @param id - ID du type d'utilisateur
   */
  deleteTypeUser(id?: number) {
    if (id === undefined) {
      alert("ID invalide.");
      return;
    }

    if (confirm("Êtes-vous sûr de vouloir supprimer ce type d'utilisateur ?")) {
      this.typeUserService.delete(id).subscribe({
        next: () => {
          alert("Type d'utilisateur supprimé avec succès !");
          this.loadTypeUsers(); // Rafraîchir la liste après suppression
        },
        error: (err) => {
          alert("Échec de la suppression du type d'utilisateur.");
          console.error('Erreur:', err);
        }
      });
    }
  }

  /**
   * Ouvrir la fenêtre modale d'édition
   * @param content - Contenu de la modal
   * @param typeUser - Type utilisateur sélectionné
   */
  openEditModal(content: any, typeUser: TypeUser) {
    this.selectedTypeUser = { ...typeUser }; // Clone de l'objet pour éviter la modification directe
    this.editForm.setValue({
      libelleAr: typeUser.libelleAr,
      libelleFr: typeUser.libelleFr
    });

    this.modalService.open(content, { centered: true });
  }

  /**
   * Mettre à jour un type d'utilisateur
   */
  updateTypeUser() {
    if (this.editForm.invalid || !this.selectedTypeUser) {
      return;
    }

    const updatedTypeUser: TypeUser = {
      ...this.selectedTypeUser,
      libelleAr: this.editForm.value.libelleAr,
      libelleFr: this.editForm.value.libelleFr
    };

    this.typeUserService.update(updatedTypeUser.id!, updatedTypeUser).subscribe({
      next: () => {
        alert("Type d'utilisateur mis à jour avec succès !");
        this.modalService.dismissAll();
        this.loadTypeUsers(); // Rafraîchir la liste
      },
      error: (err) => {
        alert("Échec de la mise à jour du type d'utilisateur.");
        console.error('Erreur:', err);
      }
    });
  }

  /**
   * Rediriger vers la page d'ajout d'un type utilisateur
   */
  add() {
    this.router.navigate(['/typeUser/addTypeUser']);
  }
}
