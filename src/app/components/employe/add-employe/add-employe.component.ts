import { UrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Employe } from 'src/app/models/employe.model';
import { EmployeService } from 'src/app/shared/employe.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private empService: EmployeService,
              private router: Router) { }

  ngOnInit(): void {
    this.initEmpForm();
  }

  initEmpForm() {
this.myForm = this.formBuilder.group({
  nom: this.formBuilder.control("",Validators.required),
  prenom: this.formBuilder.control("",Validators.required),
  mail: this.formBuilder.control("",[Validators.required,Validators.email]),
  idemploye: this.formBuilder.control("",Validators.required),
  afpaDepartements: this.formBuilder.group({
    iddepartements: this.formBuilder.control("",Validators.required),
    libelle: this.formBuilder.control("",Validators.required)
  })
});

  }
  public onSubmit(): void {
    const dataEmp = this.myForm.value;
    const emp = new Employe(dataEmp.nom,
                            dataEmp.prenom,
                            dataEmp.idemploye,
                            dataEmp.mail,
                            dataEmp.afpaDepartements);
    this.empService.addEmp(emp).subscribe(
      (response)=>{
        console.log(response);


      },

      (error)=>{
        console.log("erreur"+error);
      }

    );
    this.router.navigate(["list-employe"]);
    console.log(this.myForm.value)
  }
}
