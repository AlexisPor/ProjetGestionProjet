import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartementComponent } from './components/departement/add-departement/add-departement.component';
import { DepartementComponent } from './components/departement/departement.component';
import { ListDepartementComponent } from './components/departement/list-departement/list-departement.component';
import { AddEmployeComponent } from './components/employe/add-employe/add-employe.component';
import { EmployeComponent } from './components/employe/employe.component';
import { ListEmployeComponent } from './components/employe/list-employe/list-employe.component';
import { ModuleComponent } from './components/module/module.component';
import { ListProjetComponent } from './components/projet/list-projet/list-projet.component';
import { ProjetComponent } from './components/projet/projet.component';
import { RoleComponent } from './components/role/role.component';
import { TacheComponent } from './components/tache/tache.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
