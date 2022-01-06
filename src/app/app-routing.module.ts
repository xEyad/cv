import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseStudyComponent } from './case-study/case-study.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: 'case-study/:name', component: CaseStudyComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
