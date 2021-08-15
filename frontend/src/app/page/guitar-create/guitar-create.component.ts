import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Guitar } from 'src/app/model/guitar';
import { GuitarService } from 'src/app/service/guitar.service';

@Component({
  selector: 'app-guitar-create',
  templateUrl: './guitar-create.component.html',
  styleUrls: ['./guitar-create.component.scss']
})
export class GuitarCreateComponent implements OnInit {

  guitar: Guitar = new Guitar();

  constructor(
    private guitarService: GuitarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(ngForm: NgForm): void {
    this.guitarService.create(ngForm.value).subscribe(
      guitar => this.router.navigate(['/', 'guitars']),
      err => console.error(err)
    );
  }

}
