import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Shipping } from 'src/app/model/shipping';
import { ShippingService } from 'src/app/service/shipping.service';

@Component({
  selector: 'app-shipping-create',
  templateUrl: './shipping-create.component.html',
  styleUrls: ['./shipping-create.component.scss']
})
export class ShippingCreateComponent implements OnInit {

  shipping: Shipping = new Shipping();

  constructor(
    private shippingService: ShippingService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(ngForm: NgForm): void {
    this.shippingService.create(ngForm.value).subscribe(
      shipping => this.router.navigate(['/', 'shippings']),
      err => console.error(err)
    );
  }

}
