import { ServicesService } from './../api/services.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.scss']
})
export class CorbeilleComponent implements OnInit {
  list: any;

  constructor( public service: ServicesService) {
    this.listesCorbeille();
   }

  ngOnInit() {


  }
  listesCorbeille(){
   this.service.listeCorbeille().subscribe(res=>{
      console.log(res);
      this.list= res;

    })
  }
  recuperation(id:any){
    return this.service.recupereUsers(id).subscribe(
      data1=>{
        // window.location.reload();
        console.log(data1);
        this.listesCorbeille();
      }
    )
  }

}
