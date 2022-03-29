import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../api/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: any ='';
  password: any='';
  data: any
  delta: any

  constructor(public service: ServicesService,
    public route: Router) { }

  ngOnInit(): void {
  }
  loginPass(data){
    this.service.loginPassword(data.value.login, data.value.password).subscribe(donne =>{
      console.log(donne);
      this.delta=donne;
      if(!this.delta){
        return this.sweetAlert();
      }else{
        localStorage.setItem('logInfo', JSON.stringify(this.delta));
        this.route.navigate(['default']);
        this.validre();
      }
      data.reset();
    });
  }
  sweetAlert() {
    Swal.fire({
      title: 'Erreur',
      text: 'Login ou mot de pass incorrect',
      icon: 'error',
      showCloseButton: true,
      // showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Annuler'
    })
  }
  validre(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Bienvenue <b style="color:#ff8000">'+this.delta.prenom+ '&nbsp' +this.delta.nom+'</b>',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
