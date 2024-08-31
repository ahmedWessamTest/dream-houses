import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {
  private readonly _TranslateService = inject(TranslateService)
  constructor() {
    let savedLang: string = localStorage.getItem('lang')!;

    this._TranslateService.setDefaultLang('en');

    this._TranslateService.use(savedLang);

    this.changeDirection();

  }
  changeDirection() {
    let savedLang: string = localStorage.getItem('lang')!;
    if (savedLang === 'ar') {
      document.documentElement.dir = 'rtl'
    } else if (savedLang === 'en') {
      document.documentElement.dir = 'ltr'
    }
  }
}
