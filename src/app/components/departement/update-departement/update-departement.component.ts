import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from 'src/app/shared/departement.service';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {

  formUpDep: FormGroup;
  departement: any;

  constructor(private fb: FormBuilder,
              private DepServ: DepartementService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.DepServ.findById(id).subscribe(
      (value)=>{
        this.departement = value;
        this.initFormUp();
      });
  }

  onSubmit(): void{
    const dataUpDep = this.formUpDep.value;
    this.departement = {
      iddepartements: dataUpDep.iddepartements,
      libelle: dataUpDep.libelle
    };
    this.DepServ.updateDep(this.departement).subscribe(
      (value)=>{
        console.log("Dep modifié");

      }
    )
    this.router.navigate(['list-departement'])

  }
  initFormUp(): void{
    this.formUpDep = this.fb.group({
      iddepartements: this.fb.control(this.departement.iddepartements, Validators.required),
      libelle: this.fb.control(this.departement.libelle,Validators.required)
    })
  }
}
