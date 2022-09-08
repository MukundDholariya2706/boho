import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  memuList: any[] = [
    {
      link: "",
      title: "Design Ideas",
      subMenus: [
        {
          link: "",
          title: "False Celling Designs",
        },
        {
          link: "",
          title: "Leving Room Designs",
        },
        {
          link: "",
          title: "Modular Kitchen Designs",
        },
        {
          link: "",
          title: "Master Bedroom Designs",
        },
        {
          link: "",
          title: "Wardrobe Designs",
        },
        {
          link: "",
          title: "Kids Bedroom Designs",
        },
        {
          link: "",
          title: "Pooja Room Designs",
        },
        {
          link: "",
          title: "Dining Room Designs",
        },
        {
          link: "",
          title: "Foyer Designs",
        },
        {
          link: "",
          title: "Bathroom Designs",
        },
        {
          link: "",
          title: "Guest Vedroom Designs",
        },
        {
          link: "",
          title: "Home Office Designs",
        },
        {
          link: "",
          title: "Balcony Designs",
        },
        {
          link: "",
          title: "TV Unit Designs",
        }
      ]
    },
    {
      link: "",
      title: "How it works"
    },
    {
      link: "",
      title: "Offerings",
      subDivision: [

      ]
    },
    {
      link: "",
      title: "Cities",
      subMenus: [
        {
          link: "",
          title: "Mumbai"
        },
        {
          link: "",
          title: "Pune"
        },
        {
          link: "",
          title: "Delhi"
        },
        {
          link: "",
          title: "Surat"
        },
        {
          link: "",
          title: "Ahemdabad"
        },
        {
          link: "",
          title: "Goa"
        }
      ]
    }
  ];

  
}
