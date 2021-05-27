import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/employe.model';
import { EmployeService } from 'src/app/shared/employe.service';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit {

  emp:any[]=[];

  constructor(private servEmp:EmployeService){
    servEmp.findAll().subscribe(
      (response)=>{
        console.log(response);

        this.emp=response;
      },

      (error)=>{
        console.log("erreur"+error);
      }
    );
  }

  onSuppEmp(id: number): void {
    console.log("onSupp *******************")
    this.servEmp.delete(id).subscribe(
      (value)=>{
        console.log("L'employé est supp")

      })
  }

  ngOnInit(): void {
  }


}
