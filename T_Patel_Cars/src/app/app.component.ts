import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MessageService } from './services/message.service';
import { CarserviceService } from './services/carservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'T_Patel_Cars';

  constructor(private CarserviceService: CarserviceService) { }

  ngOnInit() { }
}
