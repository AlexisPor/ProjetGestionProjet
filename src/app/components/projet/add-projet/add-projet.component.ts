import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/shared/projet.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private projService: ProjetService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.initFormProj();
  }

  initFormProj(): void{
    this.myForm = this.formBuilder.group({
    idprojet: this.formBuilder.control("",Validators.required),
    client: this.formBuilder.control("",Validators.required),
    code: this.formBuilder.control("",Validators.required),
    datedebut: this.formBuilder.control("",Validators.required),
    datefinestimee: this.formBuilder.control("",Validators.required),
    datefinreel: this.formBuilder.control("",Validators.required),
    description: this.formBuilder.control("",Validators.required),
    titre: this.formBuilder.control("",Validators.required),
    type: this.formBuilder.control("",Validators.required),

    });
  }

  onSubmit(): void{
    const dataProj = this.myForm.value;
    this.projService.addProjet(dataProj).subscribe(
      (value)=>{
        console.log("Projet ajouté");

      }
    )
    console.log(this.myForm);
      this.router.navigate(["list-projet"]);
  };

}
