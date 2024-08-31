import { NotFoundComponent } from './components/not-found/not-found.component';
import { Routes } from '@angular/router';
import { HouseComponent } from './layouts/house/house.component';
import { PreStepComponent } from './components/pre-step/pre-step.component';
import { SelectionComponent } from './components/selection/selection.component';
import { ProbComponent } from './components/prob/prob.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { propGuard } from './core/guards/prop.guard';
import { selectionAuthGuard } from './core/guards/selection-auth.guard';

export const routes: Routes = [
  {
    path: '', component: HouseComponent, children: [
      { path: '', redirectTo: 'house', pathMatch: 'full' },
      { path: 'house', component: PreStepComponent},
      { path: 'selection', component: SelectionComponent, canActivate:[selectionAuthGuard] },
      { path: 'prob', component: ProbComponent, canActivate: [propGuard, selectionAuthGuard] },
      { path: 'submission', component: SubmissionComponent, canActivate: [propGuard, selectionAuthGuard] },
    ]
  },
  { path: '**', component: NotFoundComponent }
];
