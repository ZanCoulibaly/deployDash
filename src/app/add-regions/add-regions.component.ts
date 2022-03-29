import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../api/services.service';

@Component({
  selector: 'app-add-regions',
  templateUrl: './add-regions.component.html',
  styleUrls: ['./add-regions.component.scss']
})
export class AddRegionsComponent implements OnInit {

  constructor(public service: ServicesService) { }
confirmer: any;
  ngOnInit() {
  }
 ajouter(add: NgForm){
  return this.service.addRegion(add.value).subscribe(res=>{
     console.log(res);
    add.reset();
   })

 }
}
