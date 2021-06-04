import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from 'src/app/shared/projet.service';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})
export class UpdateProjetComponent implements OnInit {

  formUpProj: FormGroup;
  projet: any;

  constructor(private projServ: ProjetService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.projServ.findById(id).subscribe(
      (value)=>{
        this.projet = value;
        this.initFormUpProj();
      }
    )
  }

  initFormUpProj(): void{
    this.formUpProj = this.fb.group({
      idprojet: this.fb.control(this.projet.idprojet, Validators.required),
      client: this.fb.control(this.projet.client, Validators.required),
      code: this.fb.control(this.projet.code, Validators.required),
      datedebut: this.fb.control(this.projet.datedebut, Validators.required),
      datefinestimee: [this.projet.datefinestimee, Validators.required],
      datefinreel: this.fb.control(this.projet.datefinreel, Validators.required),
      description: this.fb.control(this.projet.description, Validators.required),
      titre: this.fb.control(this.projet.titre, Validators.required),
      type: this.fb.control(this.projet.type, Validators.required)
    })
  }

  onSubmit(): void{
    const dataUpProj = this.formUpProj.value;
    this.projet = {
      idprojet: dataUpProj.idprojet,
      client: dataUpProj.client,
      code: dataUpProj.code,
      datedebut: dataUpProj.datedebut,
      datefinestimee: dataUpProj.datefinestimee,
      datefinreel: dataUpProj.datefinreel,
      description: dataUpProj.description,
      titre: dataUpProj.titre,
      type: dataUpProj.type
    };
    this.projServ.update(this.projet).subscribe(
      (value)=>{
        console.log("Projet modifié");

      });
    this.router.navigate(["list-projet"]);
  }

}
