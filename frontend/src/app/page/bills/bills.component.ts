import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.billColumns;
  list$: Observable<Bill[]> = this.billService.getAll();

  constructor(
    private config: ConfigService,
    private billService: BillService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(bill: Bill): void {
    this.router.navigate(['/', 'bills', 'edit', bill._id]);
  }

}
