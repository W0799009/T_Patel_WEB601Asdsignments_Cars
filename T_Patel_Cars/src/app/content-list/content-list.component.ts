//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  title: string = '';
  errTxt: boolean = false;


  contentArray: Content[] =  [
    {
      id: 1,
      title: 'Car',
      description: 'This is Car1',
      creator: 'Creator1',
      imgURL: 'https://www.thewowstyle.com/wp-content/uploads/2015/04/car-hot.jpg',
      type: 'Supercar',
      tags: ['Tag 1.1', 'Tag 1.2'],
    },
    {
      id: 2,
      title: 'Car 2',
      description: 'This is Car2',
      creator: 'Creator2',
      imgURL: 'https://pngimg.com/uploads/audi/audi_PNG1742.png',
      type: 'SUV',
      tags: ['Tag 1.1', 'Tag 1.2'],
    },
    {
      id: 3,
      title: 'Car 3',
      description: 'This is Car3',
      creator: 'Creator1',
      imgURL: 'https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-3.jpg',
      type: 'Supercar',
      tags: ['Tag 1.1', 'Tag 1.2'],
    },
    {
      id: 4,
      title: 'Car 4',
      description: 'This is Car4',
      creator: 'Creator2',
      // imgURL: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/Pictures-Download-HD-Car-Wallpapers.jpg',
      tags: ['Tag 1.1', 'Tag 1.2'],
    },
    {
      id: 5,
      title: 'Car 5',
      description: 'This is Car5',
      creator: 'Creator3',
      imgURL: 'https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-mclaren-3.jpg',
      tags: ['Tag 1.1', 'Tag 1.2'],
    },
    {
      id: 6,
      title: 'Car 6',
      description: 'This is Car6',
      creator: 'Creator3',
      //imgURL: 'https://hdqwalls.com/wallpapers/lamborghini-aventador-s-roadster-2019-4k-ok.jpg',
      type: 'Supercar',
      tags: ['Tag 1.1', 'Tag 1.2'],
    },
    {
      id: 7,
      title: 'Car 7',
      description: 'This is Car7',
      creator: 'Creator2',
      imgURL: 'https://www.gannett-cdn.com/presto/2019/04/16/PDTN/5456e057-d2d1-450f-82aa-6cb5aecec19d-Image_4.jpg?crop=3707,2085,x1313,y400&width=3200&height=1800&format=pjpg&auto=webp',
      type: 'SUV',
      tags: ['Tag 1.1', 'Tag 1.2'],
    }
  ];

  searchTerm = '';
  searchResults: Content[] = [];
  searchExists = false;

  checkExistence() {

    if (this.searchTerm.trim() === '') {
      this.searchExists = false;
      return;
    }

    /*this.searchResults = this.contentArray.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.searchExists = this.searchResults.length > 0;*/
  }

  /*addContent(content: Content) {
    this.contentArray.push(content);
  }*/


  addContent(newContent: Content) {
    const AddPromise = new Promise((resolve, reject) => {
      this.contentArray.push(newContent);
      console.log(`Content Added successfully, Country: ${this.title}`);
      this.contentArray = [...this.contentArray];
      resolve(newContent.title);
    });

    AddPromise.then(title => {
      
      this.errTxt = false;
    }).catch(err => {
      this.errTxt = true;
    });

  }


}
