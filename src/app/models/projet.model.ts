export class Projet {


  public constructor(

    public idprojet: number,
    public client: string,
    public code: number,
    public datedebut: Date,
    public datefinestimee: Date,
    public datefinreel: Date,
    public description: string,
    public titre: string,
    public type: string,

  ) {

  }
}
