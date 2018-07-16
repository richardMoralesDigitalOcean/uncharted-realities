import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { GlassCardComponent } from './glass-card/glass-card.component';
import { ShopComponent } from './components/Shop/shop.component';
import { ShopProfileComponent } from './components/shop-profile/shop-profile.component';
import { ReservationComponent } from './components/Reservation/reservation.component';
import { NewsAndEventsComponent } from './components/news-and-events/news-and-events.component';

import {DocumentService} from './Services/document.service';
import {EmailService} from './Services/email.service';

const appRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'vendors', component: VendorsComponent },
  { path: 'worlds', component: WorldsComponent },
  {path: 'shop', component: ShopComponent},
  {path: 'reservations', component: ReservationComponent},
  {path: 'newsAndEvents', component: NewsAndEventsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo:  'home', pathMatch: 'full' }
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
    WorldsPipe,
    GlassCardComponent,
    ShopComponent,
    ShopProfileComponent,
    ReservationComponent,
    NewsAndEventsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NguCarouselModule
  ],
  providers: [WorldsPipe, DocumentService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
