import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/shared/departement.service';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {

  dep: any[]=[];

  constructor(depServ: DepartementService) {
    depServ.findAll().subscribe(
      (response)=>{
        this.dep=response;
      },

      (error)=>{
        console.log(`erreur${{error}}`);

      }
    );
   }


  ngOnInit(): void {
  }

}
