import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from 'src/app/models/module.model';
import { ModuleService } from 'src/app/shared/module.service';
import { TacheService } from 'src/app/shared/tache.service';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.css']
})
export class UpdateTacheComponent implements OnInit {

  formUpTache: FormGroup;
  tache: any;
  mod: any[];

  constructor(private fb: FormBuilder,
              private tacheServ: TacheService,
              private route: ActivatedRoute,
              private router: Router,
              private moduleServ: ModuleService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"]
    this.tacheServ.findById(id).subscribe(
      (value)=>{
        this.tache = value;
        this.findAllMod();
        this.initFormUpTache();

      }
    )
  }

  initFormUpTache():void {
    this.formUpTache = this.fb.group({
      idtache: this.fb.control(this.tache.idtache, Validators.required),
      datedebut: this.fb.control(this.tache.datedebut, Validators.required),
      datefinestimee: this.fb.control(this.tache.datefinestimee, Validators.required),
      datefinreel: this.fb.control(this.tache.datefinreel, Validators.required),
      libelle: this.fb.control(this.tache.libelle, Validators.required),
      idmodule: this.fb.control(this.tache.afpaModules.idmodule, Validators.required),


    });
  }

  onSubmit(): void{
    const dataUpTache = this.formUpTache.value;

    const afpaModules: Module = new Module();
    afpaModules.idmodule = dataUpTache.idmodule;

    this.tache = {
      idtache: dataUpTache.idtache,
      datedebut: dataUpTache.datedebut,
      datefinestimee: dataUpTache.datefinestimee,
      datefinreel: dataUpTache.datefinreel,
      libelle: dataUpTache.libelle,
      afpaModules
    }
    this.tacheServ.updateTache(this.tache).subscribe(
      (value)=>{
        console.log("Tache modifié");

      }
    );
    this.router.navigate(["list-tache"])
  }

  public findAllMod(): void {
    this.moduleServ.findAll().subscribe(
      (value)=>{
        this.mod = value;
      }
    )
  }
}
