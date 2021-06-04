import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {

  formUpdate: FormGroup;
  employe: any;
  departement: any[];
  role: any[];
  projet: any[];

  constructor(private servEmp: EmployeService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private depServ: DepartementService,
              private roleServ: RoleService,
              private projetServ: ProjetService ) {
              }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.servEmp.findById(id).subscribe(
      (value)=>{
        this.employe=value;
        console.log(value);
        this.findAllProj();
        this.findAllDep();
        this.findAllRole();
        this.initFormUpdate();
      });




  }

initFormUpdate(): void{
  this.formUpdate = this.formBuilder.group({
    prenom: this.formBuilder.control(this.employe.prenom,Validators.required),
    nom: this.formBuilder.control(this.employe.nom,Validators.required),
    mail: this.formBuilder.control(this.employe.mail,Validators.required),
    idemploye: this.formBuilder.control(this.employe.idemploye,Validators.required),
      iddepartements: this.formBuilder.control(this.employe.afpaDepartements.iddepartements,Validators.required),
      idprojet: this.formBuilder.control(this.employe.afpaProjet.idprojet,Validators.required),
      idrole: this.formBuilder.control(this.employe.afpaRoles.idrole,Validators.required)



    }

  )};

  onSubmit(): void{

  const updateEmp = this.formUpdate.value;

  const afpaDepartements: AfpaDepartements = new AfpaDepartements();
  afpaDepartements.iddepartements=updateEmp.iddepartements;

  const afpaRoles: Role = new Role();
  afpaRoles.idrole = updateEmp.idrole;

  const afpaProjet: Projet = new Projet();
  afpaProjet.idprojet = updateEmp.idprojet;

  this.employe = {
    nom: updateEmp.nom,
    prenom: updateEmp.prenom,
    mail: updateEmp.mail,
    idemploye: updateEmp.idemploye,
    afpaDepartements,
    afpaProjet,
    afpaRoles

  }
  this.servEmp.update(this.employe).subscribe(
    (value)=>{
      console.log(value);

    }
  )
  this.router.navigate(["list-employe"]);
  };

  public findAllDep(): void{
    this.depServ.findAll().subscribe(
      (value)=>{
        this.departement = value;
      }
    )
  };

  public findAllRole(): void{
this.roleServ.findAll().subscribe(
  (value)=>{
    this.role = value;
  }

  )};

  public findAllProj(): void{
    this.projetServ.findAll().subscribe(
        (value)=>{
          this.projet = value;
        }
    )
  }
}

