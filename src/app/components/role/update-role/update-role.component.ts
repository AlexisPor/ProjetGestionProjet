import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from 'src/app/shared/role.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  formUpRole: FormGroup;
  role: any;

  constructor(private route: ActivatedRoute,
              private roleServ: RoleService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.roleServ.findById(id).subscribe(
      (value)=>{

        this.role = value;
        this.initFormUpRole();

      }
    )
  }
  initFormUpRole(): void{
    this.formUpRole = this.fb.group({
      idrole: this.fb.control(this.role.idrole, Validators.required),
      libelle: this.fb.control(this.role.libelle, Validators.required)
    })
  }

  onSubmit(): void{
    const dataUpRole = this.formUpRole.value;
    this.role = {
      idrole: dataUpRole.idrole,
      libelle: dataUpRole.libelle
    };
    this.roleServ.updateRole(this.role).subscribe(
      (value)=>{
        console.log("Rôle modifié");

      }
    );
    this.router.navigate(['list-role']);
  }
}
