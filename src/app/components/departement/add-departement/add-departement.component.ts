import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { AfpaDepartements } from 'src/app/models/departement.model';

import { DepartementService } from 'src/app/shared/departement.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  myFormDep:FormGroup;

  constructor(private formBuilder: FormBuilder,
              private depServ: DepartementService,
              private router: Router) { }

  ngOnInit(): void {
    this.initOnForm()
  }

  initOnForm(){
    this.myFormDep = this.formBuilder.group({
      libelle: this.formBuilder.control("",Validators.required),
      iddepartements: this.formBuilder.control("",Validators.required)


    })
  }

  onSubmit(){
    const dataDep = this.myFormDep.value;
    const dep = new AfpaDepartements();
    dep.iddepartements=dataDep.iddepartements;
    dep.libelle=dataDep.libelle;
    this.depServ.addDep(dep).subscribe(
      (response)=>{
        console.log(response);

      },
      (error)=>{
        console.log(`error${{error}}`);
      }
    );
    this.router.navigate(["list-departement"]);
    console.log(this.myFormDep.value)
  }
}
