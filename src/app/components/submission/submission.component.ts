import { AfterViewInit, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submission',
  standalone: true,
  imports: [],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.css'
})
export class SubmissionComponent implements AfterViewInit {
  private readonly _Router = inject(Router);
  fakeSend: number = 0;
  fakeSendSub!: any;
  steps: number = 1;
  ngAfterViewInit(): void {
    this.fakeSendSub = setInterval(() => {
      this.fakeSend++;
      if (this.fakeSend === 100) {
        this.steps = 2;
        clearInterval(this.fakeSendSub);
      }
    }, 50)
  }
  exitFunc(): void {
    sessionStorage.clear();
    this._Router.navigate(['/house'])
  }


}
