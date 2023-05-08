import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ReferenceTemplateComponent } from './reference-template/reference-template.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildDemoComponent } from './view-child-demo/view-child-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    ReferenceTemplateComponent,
    CustomerListComponent,
    ViewChildComponent,
    ViewChildDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
