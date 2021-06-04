import { UrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AfpaDepartements } from 'src/app/models/departement.model';

import { Employe } from 'src/app/models/employe.model';
import { Projet } from 'src/app/models/projet.model';
import { Role } from 'src/app/models/role.model';
import { DepartementService } from 'src/app/shared/departement.service';
import { EmployeService } from 'src/app/shared/employe.service';
import { ProjetService } from 'src/app/shared/projet.service';
import { RoleService } from 'src/app/shared/role.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  myForm: FormGroup;
  departement: any[];
  role: any[];
  projet: any[];

  constructor(private formBuilder: FormBuilder,
              private empService: EmployeService,
              private router: Router,
              private depServ: DepartementService,
              private roleServ: RoleService,
              private projServ: ProjetService) { }

  ngOnInit(): void {
    this.findAllDep();
    this.findAllRole();
    this.fondAllProj();
    this.initEmpForm();

  }

  initEmpForm() {
this.myForm = this.formBuilder.group({
  nom: this.formBuilder.control("",Validators.required),
  prenom: this.formBuilder.control("",Validators.required),
  mail: this.formBuilder.control("",[Validators.required,Validators.email]),
  idemploye: this.formBuilder.control("",Validators.required),
  idprojet: this.formBuilder.control("",Validators.required),
  iddepartements: this.formBuilder.control("",Validators.required),
    idrole: this.formBuilder.control("",Validators.required)
  })


  }
  public onSubmit(): void {

    const dataEmp = this.myForm.value;

   const afpaDepartements: AfpaDepartements =new AfpaDepartements();
   const afpaProjet: Projet = new Projet();
   const afpaRoles: Role = new Role();

   afpaProjet.idprojet = dataEmp.idprojet;
   afpaDepartements.iddepartements=dataEmp.iddepartements;
   afpaRoles.idrole = dataEmp.idrole;

    const emp = new Employe(dataEmp.nom,
                            dataEmp.prenom,
                            dataEmp.idemploye,
                            dataEmp.mail,
                            afpaDepartements,
                            afpaProjet,
                            afpaRoles);

                            console.log(emp);

    this.empService.addEmp(emp).subscribe(
      (response)=>{
        console.log(response);


      },

      (error)=>{
        console.log("erreur"+error);
      }

    );
    this.router.navigate(["list-employe"]);

  };

  public findAllDep() {
    this.depServ.findAll().subscribe(
      (response)=>{
     this.departement=response;
      }
    )
    };

  public findAllRole(){
    this.roleServ.findAll().subscribe(
      (value)=>{
        this.role = value;
      }
    )
  };

  public fondAllProj(){
    this.projServ.findAll().subscribe(
      (value)=>{
        this.projet = value;
      }
    )
  }
}
