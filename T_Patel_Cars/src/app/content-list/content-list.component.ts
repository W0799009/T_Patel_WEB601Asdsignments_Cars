//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 1,
        title: 'Car 1',
        description: 'This is Car1',
        creator: 'Creator1',
        imgURL: 'https://www.hdnicewallpapers.com/Walls/Big/Lamborghini/4K_Photo_of_2019_Lamborghini_Huracan_EVO_Car.jpg',
        type: 'Supercar',
        tags: ['Tag 1.1', 'Tag 1.2'],
      },
      {
        id: 2,
        title: 'Car 2',
        description: 'This is Car2',
        creator: 'Creator2',
        imgURL: 'https://pngimg.com/uploads/audi/audi_PNG1742.png',
        type: 'Sedan',
        tags: ['Tag 1.1', 'Tag 1.2'],
      },
      {
        id: 3,
        title: 'Car 3',
        description: 'This is Car3',
        creator: 'Creator1',
        imgURL: 'https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-3.jpg',
        type: 'suv',
        tags: ['Tag 1.1', 'Tag 1.2'],
      },
      {
        id: 4,
        title: 'Car 4',
        description: 'This is Car4',
        creator: 'Creator2',
        imgURL: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/Pictures-Download-HD-Car-Wallpapers.jpg',
        type: 'Roadster',
        tags: ['Tag 1.1', 'Tag 1.2'],
      },
      {
        id: 5,
        title: 'Car 5',
        description: 'This is Car5',
        creator: 'Creator3',
        imgURL: 'https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-mclaren-3.jpg',
        type: 'Supercar',
        tags: ['Tag 1.1', 'Tag 1.2'],
      },
      {
        id: 6,
        title: 'Car 6',
        description: 'This is Car6',
        creator: 'Creator3',
        imgURL: 'https://hdqwalls.com/wallpapers/lamborghini-aventador-s-roadster-2019-4k-ok.jpg',
        type: 'Supercar',
        tags: ['Tag 1.1', 'Tag 1.2'],
      }
    ];
  }
}
