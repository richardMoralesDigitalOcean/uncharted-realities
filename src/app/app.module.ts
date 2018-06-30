import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NguCarouselModule } from '@ngu/carousel';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/Home/home.component';
import { AboutComponent } from './components/About/about.component';
import { ContactComponent } from './components/Contact/contact.component';
import { VendorsComponent } from './components/Vendors/vendors.component';
import { WorldsComponent } from './components/Worlds/worlds.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { WorldsPipe } from './Pipes/worlds-pipe.pipe';

const appRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'vendors',      component: VendorsComponent },
  { path: 'worlds',      component: WorldsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    VendorsComponent,
    WorldsComponent,
    ProfileComponent,
    WorldsPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NguCarouselModule
  ],
  providers: [WorldsPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
