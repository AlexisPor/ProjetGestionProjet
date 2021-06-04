import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/shared/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

 myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private roleService: RoleService,
              private router: Router) { }

  ngOnInit(): void {
    this.onInitForm();
  }

  onInitForm(): void{
    this.myForm = this.formBuilder.group({
      idrole: this.formBuilder.control("",Validators.required),
      libelle: this.formBuilder.control("",Validators.required)
    });
  }

onSubmit(): void {
  const dataRole = this.myForm.value;
  this.roleService.addRole(dataRole).subscribe(
    (value)=>{
      console.log("Role ajouté");

    }
  )
this.router.navigate(['list-role']);
}
}
