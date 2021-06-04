import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/shared/role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  role: any[];

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.findAll().subscribe(
      (value)=>{
        this.role = value;
      }
    )
  }

  onSuppRole(id: number): void {
    this.roleService.delete(id).subscribe(
      (value)=>{
        console.log("Role supprimé");

      }
    )
  }

}
