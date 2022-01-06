import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionSelectorComponent } from './section-selector/section-selector.component';


const routes: Routes = [
  { path: 'about', component: SectionSelectorComponent },
  { path: '**', component: SectionSelectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
