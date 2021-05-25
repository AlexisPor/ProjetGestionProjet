import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/shared/employe.service';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit {

  emp:any[]=[];

  constructor(servEmp:EmployeService){
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

  ngOnInit(): void {
  }

}
