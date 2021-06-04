import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { ProjetService } from 'src/app/shared/projet.service';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {

  proj: any[]=[];

  constructor(private projServ: ProjetService) {
    projServ.findAll().subscribe(
      (response)=>{
        this.proj=response;
      },
      (error)=>{
        console.log(`erreur${{error}}`);
      }
    );
   }

  ngOnInit(): void {
  }
onSuppProj(id: number): void{
this.projServ.delete(id).subscribe(
  (response)=>{
    console.log("Projet supp");

  }
)
}
}
