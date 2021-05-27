import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/models/employe.model';
import { EmployeService } from 'src/app/shared/employe.service';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {

  formUpdate: FormGroup;
  employe: any;

  constructor(private servEmp: EmployeService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router ) {
              }

  ngOnInit(): void {
    this.initFormUpdate();
    const id = this.route.snapshot.paramMap.get('id');
    //this.servEmp.findById(id).subscribe(
     //employe=>{this.employe = employe}
    //);
  }

initFormUpdate(): void{
  this.formUpdate = this.formBuilder.group({
    prenom: this.formBuilder.control("",Validators.required),
    nom: this.formBuilder.control("",Validators.required),
    mail: this.formBuilder.control("",Validators.required),
    idemploye: this.formBuilder.control("",Validators.required),

    }
  )};

  //onSubmit(): void{
  //const updateEmp = this.formUpdate.value;
  //const emp = new Employe(updateEmp.prenom,
                          //updateEmp.nom,
                          //updateEmp.idemploye,
                          //updateEmp.mail);
  //this.servEmp.update(emp).subscribe(
    //(value)=>{
      //console.log("Employé modifié");

    //}
  //)
  //this.router.navigate(["list-employe"]);
  //};
}

