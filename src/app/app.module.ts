import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ContainerComponent } from './example1/Container/container/container.component';
import { NavComponent } from './example1/nav/nav.component';
import { HeaderComponent } from './example1/header/header.component';
import { NotificationComponent } from './example1/notification/notification.component';
import { SearchComponent } from './example1/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './example1/products/products.component';
import { ReferenceTemplateComponent } from './example1/reference-template/reference-template.component';
import { CustomerListComponent } from './example1/customer-list/customer-list.component';
import { ViewChildComponent } from './example1/view-child/view-child.component';
import { ViewChildDemoComponent } from './example1/view-child-demo/view-child-demo.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { LifecycleComponent } from './example2/lifecycle/lifecycle.component';
import { LifecycleDemoComponent } from './example2/lifecycle-demo/lifecycle-demo.component';
import { ContentChildComponent } from './example2/content-child/content-child.component';
import { SetbackgroundDirective } from './example2/custom-directive/directive/setbackground.directive';
import { HighlightDirective } from './example2/custom-directive/directive/highlight.directive';
import { HighlightDirective2 } from './example3/directive/highlight.directive';
import { CustomDirectiveComponent } from './example2/custom-directive/custom-directive.component';
import { HoverDirective } from './example2/custom-directive/directive/hover.directive';
import { BetterhighlightDirective } from './example2/custom-directive/directive/betterhighlight.directive';
import { ClassDirective } from './example2/custom-directive/directive/class.directive';
import { Example3Component } from './example3/example3.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'example1', component: Example1Component},
  {path:'example2', component: Example2Component},
  {path:'example3', component: Example3Component}
];

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
    ViewChildDemoComponent,
    Example1Component,
    Example2Component,
    LifecycleComponent,
    LifecycleDemoComponent,
    ContentChildComponent,
    SetbackgroundDirective,
    CustomDirectiveComponent,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective,
    Example3Component,
    HighlightDirective2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatIconModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
