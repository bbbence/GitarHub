import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipping } from '../model/shipping';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ShippingService extends BaseService<Shipping> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'shippings';
  }

}
