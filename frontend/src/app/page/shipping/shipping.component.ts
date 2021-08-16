import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Shipping } from 'src/app/model/shipping';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { ShippingService } from 'src/app/service/shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.shippingColumns;
  list$: Observable<Shipping[]> = this.shippingService.getAll();

  constructor(
    private config: ConfigService,
    private shippingService: ShippingService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(shipping: Shipping): void {
  }

}
