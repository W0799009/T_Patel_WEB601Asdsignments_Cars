import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { CarserviceService } from '../services/carservice.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id: number = 0;
  content: any = {};
  defaultimage: string = '/assets/images/Cars.jpg';

  constructor(private route: ActivatedRoute, private CarserviceService: CarserviceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);

      this.CarserviceService.getCarById(this.id).subscribe(car => {
        this.content = car;
      })
    });
  }

  handleClick(content: Content) {
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }
}
