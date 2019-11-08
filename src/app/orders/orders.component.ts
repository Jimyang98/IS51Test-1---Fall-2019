import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexModalService } from '../shared-components/flex-modal/flex-modal.service';
import { Http } from '@angular/http';
import { splitClasses } from '@angular/compiler';
import { readFile } from 'fs';

interface IOrders {
  pid: string;
  image: string;
  description: string;
  price: number;
  quantity: number;


}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  orders: Array<IOrders> = [{
    'pid': '1',
    'image': 'assets/sm_android.jpeg',
    'description': 'Android',
    'price': 150.00,
    'quantity': 2
  }, {
    'pid': '2',
    'image': 'assets/sm_iphone.jpeg',
    'description': 'IPhone',
    'price': 200.00,
    'quantity': 1
  }, {
    'pid': '3',
    'image': 'assets/sm_windows.jpeg',
    'description': 'Windows Phone',
    'price': 110.00,
    'quantity': 2
  }];

  constructor(
    private router: Router,
    private flexModal: FlexModalService,
    private http: Http
  ) {
  }

  async ngOnInit() {

  }
  delete(index: 1) {
    this.orders.splice(index, 1);
  }
  add() {
  }
  async readFile() {
    const rows = await this.http.get('assets/orders.json').toPromise();
  }
}
