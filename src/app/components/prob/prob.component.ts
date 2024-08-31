import { Component, inject, OnInit, SecurityContext } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-prob',
  standalone: true,
  imports: [QuillModule, ReactiveFormsModule],
  templateUrl: './prob.component.html',
  styleUrl: './prob.component.css'
})
export class ProbComponent implements OnInit {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);
  private readonly _DomSanitizer = inject(DomSanitizer)

  steps: number = 1;
  userDescValue: string = '';
  userDetailsValue: string = ''

  ngOnInit(): void {
    if (sessionStorage.getItem('userPlace') && sessionStorage.getItem('homeType')) {
      const userPlace = sessionStorage.getItem('userPlace')!;
      const homeType: string = sessionStorage.getItem('homeType')!;
      this.homeDescForm.get('descControl')?.patchValue(`${homeType} قريبه من ${userPlace}`)
    }
  }

  homeDescForm: FormGroup = this._FormBuilder.group({
    descControl: ['', [Validators.required]],
    detailsControl: [`
      عزيزي [اسم العميل]،
نحن في [اسم الشركة] نسعى دائمًا لتقديم أفضل الحلول التي تلبي احتياجاتك وتجعل حياتك أسهل. لذلك، يسعدنا أن نعلن عن إطلاق ميزات جديدة ومثيرة في منصتنا!
ما الجديد؟
ميزة X: التي تتيح لك [وصف مختصر للميزة وفائدتها].
ميزة Y: لتمكينك من [وصف مختصر للميزة وفائدتها].
ميزة Z: التي تساعدك على [وصف مختصر للميزة وفائدتها].
لماذا تختار [اسم الشركة]؟
خدمة عملاء متميزة: نحن هنا لدعمك على مدار الساعة.
أسعار تنافسية: احصل على أفضل قيمة مقابل ما تدفعه.
أمان وثقة: نحن نحافظ على سرية معلوماتك وأمانها.
عرض خاص! احصل على خصم بنسبة [نسبة الخصم]% عند استخدام الكود NEWFEATURES أثناء عملية الشراء. العرض ساري حتى [تاريخ انتهاء العرض].
لا تفوت الفرصة! انقر هنا للاكتشاف الآن: [رابط الموقع]
إذا كان لديك أي استفسارات أو تحتاج إلى مساعدة، لا تتردد في الاتصال بنا على [بيانات الاتصال].
شكرًا لاختيارك [اسم الشركة]. نحن نتطلع إلى خدمتك وتقديم أفضل تجربة ممكنة لك.
مع أطيب التحيات، فريق [اسم الشركة]
      `, [Validators.required]]
  })
  homeDescSubmit(): void {
    if (this.homeDescForm.valid) {
      const extractText = this.extractText(this.homeDescForm.get('detailsControl')?.value)
      this.userDescValue = this.homeDescForm.get('descControl')?.value;
      this.userDetailsValue = extractText;
      this.steps = 2
    }
  }
  extractText(htmlString: string): string {
    const sanitText = this._DomSanitizer.sanitize(SecurityContext.HTML, htmlString) || '';
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = sanitText;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';
    return plainText.trim();
  }

  homeMsgForm: FormGroup = this._FormBuilder.group({
    homeDesignOption: [null, [Validators.required]]
  });

  homeMsgSubmit(): void {
    if (this.homeMsgForm.valid) {
      this._Router.navigate(['/submission']);
    }
  }

  editorModules = {
    toolbar: [
      ['link', 'image'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': 'right' }, { 'align': 'center' }, { 'align': '' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'size': ['small', 'medium', 'large'] }],
    ],
  };
  editorStyles = {
    '.ql-editor': {
      direction: 'rtl',
      textAlign: 'right'
    }
  }
  quillConfig = {
    modules: this.editorModules,
    theme: 'snow',
    placeholder: 'ادخل وصفك',
  };


}
