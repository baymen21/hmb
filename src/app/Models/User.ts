import { TypeUser } from "./TypeUser";

export interface User {
  id?: number;
  nomAr: string;
  prenomAr: string;
  nomFr: string;
  prenomFr: string;
  tel: string;
  adresse: string;
  photo?: string;
  type: TypeUser;
}
