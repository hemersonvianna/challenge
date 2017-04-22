import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyButtonComponent,
    SearchInputComponent,
    BreadcrumbComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
