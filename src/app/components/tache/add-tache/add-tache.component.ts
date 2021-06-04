import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Module } from 'src/app/models/module.model';
import { Tache } from 'src/app/models/tache.model';
import { ModuleService } from 'src/app/shared/module.service';
import { TacheService } from 'src/app/shared/tache.service';



@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {

  myForm: FormGroup;
  module: any[];

  constructor(private formBuilder: FormBuilder,
              private tacheService: TacheService,
              private route: Router,
              private modServ: ModuleService) { }

  ngOnInit(): void {
    this.findAllMod();
    this.initMyForm();
  }

  initMyForm(): void {
    this.myForm = this.formBuilder.group({
    idtache: this.formBuilder.control("",Validators.required),
    datedebut: this.formBuilder.control("",Validators.required),
    datefinestimee: this.formBuilder.control("",Validators.required),
    datefinreel: this.formBuilder.control("",Validators.required),
    libelle: this.formBuilder.control("",Validators.required),
    idmodule: this.formBuilder.control("",Validators.required)

    });
  }
  onSubmit(): void{
  const dataTache = this.myForm.value;

  const afpaModules: Module = new Module();
  afpaModules.idmodule = dataTache.idmodule;

  const tache = new Tache(dataTache.idtache,
                         dataTache.datedebut,
                         dataTache.datefinestimee,
                         dataTache.datefinreel,
                         dataTache.libelle,
                         afpaModules);

this.tacheService.addTache(tache).subscribe(
  (response)=>{
    console.log("Tache ajoutée");
this.route.navigate(["list-tache"]);
  }
)
}

public findAllMod(): void {
  this.modServ.findAll().subscribe(
    (value)=>{
      this.module = value;
    }
  )
}

}
