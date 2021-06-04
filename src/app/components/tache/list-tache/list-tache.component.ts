import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TacheService } from 'src/app/shared/tache.service';

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.css']
})
export class ListTacheComponent implements OnInit {

  tache: any[];

  constructor(private tacheService: TacheService) {
    tacheService.findAll().subscribe(
      (response)=>{
        this.tache=response;
      }
    )
  }

  onSuppTache(id: number): void{
    this.tacheService.deleteTache(id).subscribe(
      (value)=>{
        console.log("Tache supprimée");

      }
    )
  }

  ngOnInit(): void {
  }

}
