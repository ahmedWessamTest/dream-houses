import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css'
})
export class SelectionComponent {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);

  steps: number = 1;

  placeForm: FormGroup = this._FormBuilder.group({
    placeOptions: [null, [Validators.required]]
  })

  typeForm: FormGroup = this._FormBuilder.group({
    typeOptions: [null, [Validators.required]]
  })

  placeSubmit(): void {
    if (this.placeForm.valid) {
      sessionStorage.setItem('userPlace', this.placeForm.get('placeOptions')?.value);
      this.steps = 2
    }
  }

  typeSubmit(): void {
    if (this.typeForm.valid) {
      sessionStorage.setItem('homeType', this.typeForm.get('typeOptions')?.value);
      this._Router.navigate(['/prob']);
    }
  }
}
