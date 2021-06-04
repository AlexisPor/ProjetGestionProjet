import { AfpaDepartements } from "./departement.model";
import { Projet } from "./projet.model";
import { Role } from "./role.model";


 export class Employe {



    public constructor(public nom: string,
                       public prenom: string,
                       public idemploye: number,
                       public mail: string,
                       public afpaDepartements: AfpaDepartements,
                       public afpaProjet: Projet,
                       public afpaRoles: Role){

    }




}
