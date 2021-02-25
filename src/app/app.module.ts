import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { HomeComponent1 } from './home1/home1.component';
import { NavBar } from './navbar/navbar.component';
import { SearchBar } from './searchbar/searchbar.component';
import { TopBanner } from './topbanner/topbanner.component';

@NgModule({
  declarations: [
    AppComponent,
    CatagoryComponent,
    HomeComponent1,
    NavBar,
    SearchBar,
    TopBanner
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
