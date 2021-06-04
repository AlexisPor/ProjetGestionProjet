import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'src/app/models/projet.model';
import { ModuleService } from 'src/app/shared/module.service';
import { ProjetService } from 'src/app/shared/projet.service';

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.css']
})
export class UpdateModuleComponent implements OnInit {

  formUpMod: FormGroup;
  module: any;
  projet: any[];

  constructor(private modServ: ModuleService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private projServ: ProjetService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.modServ.findById(id).subscribe(
      (value)=>{

      this.module = value;
      this.findAllProj();
      this.initFormMod();
      });

  }

  initFormMod(): void{
    this.formUpMod = this.fb.group({
      idmodule: this.fb.control(this.module.idmodule, Validators.required),
      datedebut: this.fb.control(this.module.datedebut,Validators.required),
      datefinestimee: this.fb.control(this.module.datefinestimee,Validators.required),
      datefinreel: this.fb.control(this.module.datefinreel,Validators.required),
      nom: this.fb.control(this.module.nom,Validators.required),
      idprojet: this.fb.control(this.module.afpaProjet.idprojet,Validators.required)

    })

  }
  onSubmit(): void{
    const dataUpMod = this.formUpMod.value;
    const afpaProjet: Projet = new Projet();
    afpaProjet.idprojet = dataUpMod.idprojet;
    this.module = {
      idmodule: dataUpMod.idmodule,
      datedebut: dataUpMod.datedebut,
      datefinestimee: dataUpMod.datefinestimee,
      datefinreel: dataUpMod.datefinreel,
      nom: dataUpMod.nom,
      afpaProjet
    }
    this.modServ.update(this.module).subscribe(
      (value)=>{
        console.log("Module supp");

      }
    )
    this.router.navigate(["list-module"])
  }

  public findAllProj(): void {
    this.projServ.findAll().subscribe(
      (value)=>{
        this.projet = value;
      }
    )
  }

}
