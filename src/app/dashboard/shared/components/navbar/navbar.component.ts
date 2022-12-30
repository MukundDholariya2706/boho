import { MENULIST } from './../../services/navbar.service';
import { NavbarService } from '../../services/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  memuList: MENULIST[] = [];
  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.memuList = this.navbarService.memuList;
  }



}
