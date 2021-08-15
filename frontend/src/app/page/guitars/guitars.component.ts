import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Guitar } from 'src/app/model/guitar';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { GuitarService } from 'src/app/service/guitar.service';

@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.scss']
})
export class GuitarsComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.guitarColumns;
  list$: Observable<Guitar[]> = this.guitarService.getAll();

  constructor(
    private config: ConfigService,
    private guitarService: GuitarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(guitar: Guitar): void {
    this.router.navigate(['/', 'guitars', 'edit', guitar._id]);
  }

}
