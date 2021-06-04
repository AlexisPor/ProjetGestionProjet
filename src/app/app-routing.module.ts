import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartementComponent } from './components/departement/add-departement/add-departement.component';
import { DepartementComponent } from './components/departement/departement.component';
import { ListDepartementComponent } from './components/departement/list-departement/list-departement.component';
import { UpdateDepartementComponent } from './components/departement/update-departement/update-departement.component';
import { AddEmployeComponent } from './components/employe/add-employe/add-employe.component';
import { EmployeComponent } from './components/employe/employe.component';
import { ListEmployeComponent } from './components/employe/list-employe/list-employe.component';
import { UpdateEmployeComponent } from './components/employe/update-employe/update-employe.component';
import { AddModuleComponent } from './components/module/add-module/add-module.component';
import { ListModuleComponent } from './components/module/list-module/list-module.component';
import { ModuleComponent } from './components/module/module.component';
import { UpdateModuleComponent } from './components/module/update-module/update-module.component';
import { AddProjetComponent } from './components/projet/add-projet/add-projet.component';
import { ListProjetComponent } from './components/projet/list-projet/list-projet.component';
import { ProjetComponent } from './components/projet/projet.component';
import { UpdateProjetComponent } from './components/projet/update-projet/update-projet.component';
import { AddRoleComponent } from './components/role/add-role/add-role.component';
import { ListRoleComponent } from './components/role/list-role/list-role.component';
import { RoleComponent } from './components/role/role.component';
import { UpdateRoleComponent } from './components/role/update-role/update-role.component';
import { AddTacheComponent } from './components/tache/add-tache/add-tache.component';
import { ListTacheComponent } from './components/tache/list-tache/list-tache.component';
import { TacheComponent } from './components/tache/tache.component';
import { UpdateTacheComponent } from './components/tache/update-tache/update-tache.component';

const routes: Routes = [
  {path:'departement',component: DepartementComponent},
  {path:'employe',component: EmployeComponent},
  {path:'module',component: ModuleComponent},
  {path:'projet',component: ProjetComponent},
  {path:'role',component: RoleComponent},
  {path:'tache',component: TacheComponent},
  {path:'add-employe',component: AddEmployeComponent},
  {path:'list-employe',component: ListEmployeComponent},
  {path:'list-departement',component: ListDepartementComponent},
  {path:'list-projet',component: ListProjetComponent},
  {path:'add-departement', component: AddDepartementComponent},
  {path:'update-employe/:id', component: UpdateEmployeComponent},
  {path:'add-projet', component: AddProjetComponent},
  {path:'list-tache', component: ListTacheComponent},
  {path:'add-tache', component: AddTacheComponent},
  {path:'list-module', component: ListModuleComponent},
  {path:'add-module', component: AddModuleComponent},
  {path:'list-role', component: ListRoleComponent},
  {path:'add-role', component: AddRoleComponent},
  {path: 'update-departement/:id', component: UpdateDepartementComponent},
  {path: 'update-module/:id', component: UpdateModuleComponent},
  {path: 'update-projet/:id', component: UpdateProjetComponent},
  {path: 'update-tache/:id', component: UpdateTacheComponent},
  {path: 'update-role/:id', component: UpdateRoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
