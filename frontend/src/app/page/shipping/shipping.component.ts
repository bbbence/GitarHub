import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipping } from 'src/app/model/shipping';
import { ShippingService } from 'src/app/service/shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  list$: Observable<Shipping[]> = this.shippingService.getAll();

  constructor(
    private shippingService: ShippingService,
  ) { }

  ngOnInit(): void {
  }

}
