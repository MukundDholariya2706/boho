import { NavbarService } from '../../services/navbar.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  memuList: any[] = [];
  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.memuList = this.navbarService.memuList;    
  }



}
