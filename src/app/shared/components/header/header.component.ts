import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  data: any;
  constructor(private route: Router, private service: ServicesService) { }

  ngOnInit() {
this.data=JSON.parse(localStorage.getItem('logInfo'));
  console.log('vvbxbb', this.data)
   }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  LogOut(){
    localStorage.removeItem('logInfo');
    this.route.navigate(['/login']);
  }
}
