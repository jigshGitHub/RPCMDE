import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { TopMenuComponent } from './topMenu/topMenu.component';
import { UserInfoComponent } from './topMenu/userInfo/userInfo.component';

@NgModule({
  declarations: [
    AppComponent
    ,HeaderComponent
    ,BannerComponent
    ,TopMenuComponent
    ,UserInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent
  ,HeaderComponent
  ]
})
export class AppModule { }
