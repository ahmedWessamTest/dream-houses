import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pre-step',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './pre-step.component.html',
  styleUrl: './pre-step.component.css'
})
export class PreStepComponent {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router)

  homeForm: FormGroup = this._FormBuilder.group({
    messageOption:[null, [Validators.required]],
    projectName:[null, [Validators.required, Validators.minLength(3)]]
  })

  submitInitInformation():void{
    if(this.homeForm.valid){
      sessionStorage.setItem('selectionAuth', '147258');
      this._Router.navigate(['/selection'])
    }
  }
}
