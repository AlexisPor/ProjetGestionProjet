import { Module } from "./module.model";

export class Tache {
   afpaModules: Module;

  public constructor(

    public idtache: number,
    public datedebut: Date,
    public datefinestimee: Date,
    public datefinreel: Date,
    public libelle: string,
     afpaModules: Module

  ) {
  this.afpaModules=afpaModules;
  }
}
