import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Module } from 'src/app/models/module.model';
import { Projet } from 'src/app/models/projet.model';
import { ModuleService } from 'src/app/shared/module.service';
import { ProjetService } from 'src/app/shared/projet.service';


@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  myForm: FormGroup;
  projet: any[];

  constructor(private formBuilder: FormBuilder,
              private modService: ModuleService,
              private router: Router,
              private projService: ProjetService ) { }

  ngOnInit(): void {
    this.findAllProj();
    this.initMyForm();
  }

  initMyForm(): void{
    this.myForm = this.formBuilder.group({
      idmodule: this.formBuilder.control("",Validators.required),
      datedebut: this.formBuilder.control("",Validators.required),
      datefinestimee: this.formBuilder.control("",Validators.required),
      datefinreel: this.formBuilder.control("",Validators.required),
      nom: this.formBuilder.control("",Validators.required),
      idprojet: this.formBuilder.control("",Validators.required)


    });
  }
  onSubmit(): void{
    const dataMod = this.myForm.value;

    const afpaProjet: Projet = new Projet();
    afpaProjet.idprojet = dataMod.idprojet;

    const module = new Module();
    module.idmodule = dataMod.idmodule;
    module.datedebut = dataMod.datedebut;
    module.datefinestimee = dataMod.datefinestimee;
    module.datefinreel = dataMod.datefinreel;
    module.nom = dataMod.nom;
    module.afpaProjet = afpaProjet;

    this.modService.addMod(module).subscribe(
      (value)=>{
        console.log("Module ajouté");
        this.router.navigate(['list-module'])

      }
    )

  }

  public findAllProj(){
    this.projService.findAll().subscribe(
      (value)=>{
        this.projet = value;
      }
    )
  }
}
