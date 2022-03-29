import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../api/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  list: any;
  mode= 1;
  donne: any;
  delta: any;
  ajouter: NgForm;

  constructor(private router: Router,
    public service: ServicesService)
    {
      this.listess();
    }

  ngOnInit() {
  }

  listess(){
    return this.service.listerParent().subscribe((data: any)=>{
      console.log(data);
      this.list= data;
     })
   }

   supprimerId(id:any){
     return this.service.deleteParent(id).subscribe(
       data=>{
         window.location.reload();
         console.log(data);
         // this.listess();
       })
   }
   getDetails(id:any){
     return this.service.detailsParent(id).subscribe(
       data1=>{
        this.donne=JSON.parse(data1)
        // console.log(this.donne);
         this.mode= 2;
         // this.listess();
     })
   }
   editer(id:any){
     return this.service.detailsParent(id).subscribe(
       data2=>{
        this.delta=JSON.parse(data2);
         console.log(this.delta);
         this.mode= 3;

       }
     )
   }
   modifier(ajouter:any, id:any){
     return this.service.modifierTuteur(ajouter, id).subscribe(res=>{
       console.log(res);

     })
   }


   back1(){
     this.mode=1;
   }

   sweetAlert(id: any) {
    Swal.fire({
      title: 'Suppresion',
      text: 'Voulez vous supprimer ?',
      icon: 'question',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: '#008000',
      cancelButtonColor: '#d33',
      showLoaderOnConfirm: true,
      confirmButtonText: 'Confirmer',
      denyButtonText: 'Annuler',
    })
    .then((response: any) => {
      if (response.value) {
        this.supprimerId(id);
        Swal.fire(

          'Supprimer',
          'success'
        )
        window.location.reload();
      } else if (response.dismiss === Swal.DismissReason.cancel) {

      }
    })
  }
}
