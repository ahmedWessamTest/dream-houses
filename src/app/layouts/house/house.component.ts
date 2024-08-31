import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})
export class HouseComponent {
  readonly _Router = inject(Router);
  readonly _Location = inject(Location);
  closeFunc(): void {
    this._Router.navigate(['/house']);
  }
  backwardFunc(): void {
    this._Location.back();
  }
}
