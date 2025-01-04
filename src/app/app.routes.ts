import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import path from 'path';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:'home' ,component:HomeComponent ,title:'Home Page'},
  {path:'about' ,component:AboutComponent ,title:'About Page'},
  {path:'contact' ,component:ContactComponent ,title:'Contact Page'},
  {path:'product' ,component:ProductListComponent ,title:'Product Page'},
  {path:'footer' ,component:FooterComponent ,title:'Footer Page'},
  {path:'notfound' ,component:NotfoundComponent ,title:'Not Found Page'}



];
