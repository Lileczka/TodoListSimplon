import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1homeComponent } from './pages/page1home/page1home.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';

const routes: Routes = [
  {
  path:'', 
  component: Page1homeComponent
  },
  {
    path:'page2', 
    component: Page2Component
    },
    {
    path:'page3', 
    component: Page3Component
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
