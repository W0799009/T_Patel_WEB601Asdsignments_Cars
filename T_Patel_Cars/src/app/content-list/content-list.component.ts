import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CarserviceService } from '../services/carservice.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[] = [];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  defaultimage: string = '/assets/images/Cars.jpg';


  constructor(private CarserviceService: CarserviceService) {

  }

  ngOnInit() {
    this.CarserviceService.getCars().subscribe((cars: Content[]) => this.contents = cars);
  }


  searchByTitle() {
    const matchingCar = this.contents.find(car => car.title.toLowerCase() === this.searchTitle.toLowerCase());
    const cardElements = document.querySelectorAll(`div.card`);

    if (matchingCar) {
      this.titleFound = true;

      cardElements.forEach(card => {
        if (parseInt(card.id) === matchingCar.id) {
          card.classList.add('matched');
        } else {
          card.classList.remove('matched');
        }
      });
    } else {
      this.titleFound = false;
      cardElements.forEach(card => card.classList.remove('matched'));
    }
  }

}






















//////import { Component } from '@angular/core';
////import { Component, OnInit } from '@angular/core';
////import { Content } from '../helper-files/content-interface';


////@Component({
////  selector: 'app-content-list',
////  templateUrl: './content-list.component.html',
////  styleUrls: ['./content-list.component.scss']
////})
////export class ContentListComponent {
////  contents: Content[] = [];
////  searchTitle: string = "";
////  titleFound: boolean | null = null;
////  defaultBike: string = '/assets/images/drawBike.jpg';


////  constructor(private carService: carService) {

////  }

////  ngOnInit() {
////    this.carService.getBikes().subscribe((cars: Content[]) => this.contents = cars);
////  }

////  searchTerm = '';
////  searchResults: Content[] = [];
////  searchExists = false;

////  checkExistence() {
    
////    if (this.searchTerm.trim() === '')
////    {
////      this.searchExists = false;
////      return;
////    }
    

////    searchByTitle()
////    {
////      const matchingBike = this.contents.find(bike => bike.title.toLowerCase() === this.searchTitle.toLowerCase());
////      const cardElements = document.querySelectorAll(`div.card`);

////      if (matchingBike) {
////        this.titleFound = true;

////        cardElements.forEach(card => {
////          if (parseInt(card.id) === matchingBike.id) {
////            card.classList.add('matched');
////          } else {
////            card.classList.remove('matched');
////          }
////        });
////      } else {
////        this.titleFound = false;
////        cardElements.forEach(card => card.classList.remove('matched'));
////      }
////    }
////  }    
////}

////function searchByTitle() {
////    throw new Error('Function not implemented.');
////}
