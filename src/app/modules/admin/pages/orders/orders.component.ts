import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/modules/shared/alert-message/alert-message.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  constructor(private messageService: AlertMessageService) {}

  ngOnInit(): void {
    //this.messageService.info('welcome to order page ');
  }
}
