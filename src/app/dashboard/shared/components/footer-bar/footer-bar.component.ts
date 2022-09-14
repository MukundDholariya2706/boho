import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.css'],
})
export class FooterBarComponent implements OnInit {
  locationList: any = [];

  constructor() {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    this.locationList = [
      {
        title: 'Interior Designer in Delhi',
        link: '',
      },
      {
        title: 'Interior Designer in Gurugram',
        link: '',
      },
      {
        title: 'Interior Designer in Noida',
        link: '',
      },
      {
        title: 'Interior Designer in Indore',
        link: '',
      },
      {
        title: 'Interior Designer in Lucknow',
        link: '',
      },
      {
        title: 'Interior Designer in Ghaziabad',
        link: '',
      },
      {
        title: 'Interior Designer in Faridabad',
        link: '',
      },
      {
        title: 'Interior Designer in Bengaluru',
        link: '',
      },
      {
        title: 'Interior Designer in Chennai',
        link: '',
      },
      {
        title: 'Interior Designer in Hyderabad',
        link: '',
      },
      {
        title: 'Interior Designer in Kochi',
        link: '',
      },
      {
        title: 'Interior Designer in Mysore',
        link: '',
      },
      {
        title: 'Interior Designer in Coimbatore',
        link: '',
      },
      {
        title: 'Interior Designer in Mangalore',
        link: '',
      },
      {
        title: 'Interior Designer in Vijayawada',
        link: '',
      },
      {
        title: 'Interior Designer in Kolkata',
        link: '',
      },
      {
        title: 'Interior Designer in in Mumbai',
        link: '',
      },
      {
        title: 'Interior Designer in in Pune',
        link: '',
      },
      {
        title: 'Interior Designer in in Ahmedabad',
        link: '',
      },
      {
        title: 'Interior Designer in in Jaipur',
        link: '',
      },
      {
        title: 'Interior Designer in in Surat',
        link: '',
      },
      {
        title: 'Interior Designer in in Thane',
        link: '',
      },
      {
        title: 'Interior Designer in in Nagpur',
        link: '',
      },
      {
        title: 'Interior Designer in in Goa',
        link: '',
      },
      {
        title: 'Interior Designer in in Chandigarh',
        link: '',
      },
      {
        title: 'Interior Designer in in Trivandrum',
        link: '',
      },
      {
        title: 'Interior Designer in in Vadodara',
        link: '',
      },
      {
        title: 'Interior Designer in in Patna',
        link: '',
      },
      {
        title: 'Interior Designer in in Bhubaneswar',
        link: '',
      },
      {
        title: 'Interior Designer in in Guwahati',
        link: '',
      },
      {
        title: 'Interior Designer in in Bhopal',
        link: '',
      },
      {
        title: 'Interior Designer in in Navi Mumbai',
        link: '',
      },
      {
        title: 'Interior Designer in in Dehradun',
        link: '',
      },
      {
        title: 'Interior Designer in in Kanpur',
        link: '',
      },
      {
        title: 'Interior Designer in in Madurai',
        link: '',
      },
      {
        title: 'Interior Designer in in Thrissur',
        link: '',
      },
      {
        title: 'Interior Designer in in Raipur',
        link: '',
      },
      {
        title: 'Interior Designer in in Nashik',
        link: '',
      },
      {
        title: 'Interior Designer in in Ranchi  ',
        link: '',
      },
      {
        title: 'Interior Designer in in Rajkot',
        link: '',
      }
    ];
  }
}
