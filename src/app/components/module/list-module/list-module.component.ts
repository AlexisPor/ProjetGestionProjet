import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/shared/module.service';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent implements OnInit {

  mod: any[];

  constructor(private modService: ModuleService) {}

  ngOnInit(): void {
    this.modService.findAll().subscribe(
      (value)=>{
        console.log("test");
        this.mod = value;
      }
    )
  }
  onSuppMod(id: number): void {
    this.modService.deleteMod(id).subscribe(
      (value)=>{
        console.log("Le module à bien été supprimé");

      }
    )
  }

}
