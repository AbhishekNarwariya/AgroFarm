import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { LayoutComponent } from './layout/layout.component';
import { ReportsComponent } from './reports/reports.component';
import { VideosComponent } from './videos/videos.component';
import { PicsComponent } from './pics/pics.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
     
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'services', component: ServicesComponent },
      { path:'reports', component:ReportsComponent},
      { path:'videos', component:VideosComponent},
      { path:'reports', component:ReportsComponent},
      { path:'pics', component:PicsComponent},

    ]
  }
];
