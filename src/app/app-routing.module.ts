import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddRegionsComponent } from './add-regions/add-regions.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { EcoleComponent } from './ecole/ecole.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { TuteurComponent } from './tuteur/tuteur.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
{
  path: 'default',
  component: DefaultComponent,
  canActivate:[AuthGuard],
  children: [
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    {
    path: 'default',
    component: DashboardComponent
  }, {
    path: 'tuteur',
    component: TuteurComponent
  },
  {
    path: 'corbeille',
    component: CorbeilleComponent
  },
  {
    path: 'ecole',
    component: EcoleComponent
  },
  {
    path: 'utilisateur',
    component: UtilisateurComponent
  },
  {
    path: 'accueil',
    component: AccueilComponent
  }

]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'forgetpass',
  component: ForgetpassComponent
},
{
  path: 'add-regions',
  component: AddRegionsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
