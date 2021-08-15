import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { Guitar } from 'src/app/model/guitar';
import { GuitarService } from 'src/app/service/guitar.service';

@Component({
  selector: 'app-guitar-edit',
  templateUrl: './guitar-edit.component.html',
  styleUrls: ['./guitar-edit.component.scss']
})
export class GuitarEditComponent implements OnInit {

  guitar$: Observable<Guitar> = this.ar.params.pipe(
    switchMap(params => this.guitarService.get(params.id))
  );
  guitar: Guitar = new Guitar();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private guitarService: GuitarService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.guitar$.subscribe(
      guitar => {
        this.guitar = guitar;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {
    /*
    _id: string = '';
  name: string = '';
  description: string = '';
  price: number = 0;
  */
    this.fields = [
      new InputField({key: '_id', label: '', type: 'hidden', value: this.guitar._id}),
      new InputField({key: 'brand', label: 'Brand', type: 'text', value: this.guitar.brand,
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Brand is required.'}),
      new InputField({key: 'model', label: 'Model', type: 'text', value: this.guitar.model,
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Model is required.'}),
      new TextareaField({key: 'color', label: 'Color', value: this.guitar.description}),
      new TextareaField({key: 'description', label: 'Description', value: this.guitar.description}),
      new InputField({key: 'price', label: 'Price', type: 'number', value: (this.guitar.price as unknown as string)}),
    ];
  }

  onSave(ngForm: NgForm): void {
    this.guitarService.update(ngForm.value).subscribe(
      p => this.router.navigate(['/', 'guitars'])
    );
  }

  delete(guitar: Guitar): void {
    if (confirm('Are you sure?')) { 
      this.guitarService.remove(guitar._id).subscribe(
        p => this.router.navigate(['/', 'guitars'])
      );
    }
  }

}
