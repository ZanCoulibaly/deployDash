import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { EcoleComponent } from './ecole/ecole.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TuteurComponent } from './tuteur/tuteur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HighchartsChartModule } from 'highcharts-angular';
import { AuthGuard } from './services/auth.guard';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { AddRegionsComponent } from './add-regions/add-regions.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EcoleComponent,
    UtilisateurComponent,
    CorbeilleComponent,
    TuteurComponent,
    AccueilComponent,
    ForgetpassComponent,
    AddRegionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatIconModule,
    MatPaginatorModule,
    HttpClientModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    HighchartsChartModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
