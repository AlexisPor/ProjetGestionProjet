import { AfpaDepartements } from "./departement.model";


 export class Employe {


  public constructor(
    public nom: string,
    public prenom: string,
    public idemploye: number,
    public mail: string,
    public afpaDepartements: AfpaDepartements
  ) {

  }
}
