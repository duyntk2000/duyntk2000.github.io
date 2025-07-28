import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CybersousChefComponent } from './components/cybersous-chef/cybersous-chef.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  { path: "", component: PortfolioComponent},
  { path: "cybersous-chef", component: CybersousChefComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // you may still do this
      scrollPositionRestoration: 'enabled',
      // but don't do this, the default is disabled
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
