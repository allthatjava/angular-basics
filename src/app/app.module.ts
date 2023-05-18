import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContainerComponent } from './example1/Container/container/container.component';
import { NavComponent } from './example1/nav/nav.component';
import { HeaderComponent } from './example1/header/header.component';
import { NotificationComponent } from './example1/notification/notification.component';
import { SearchComponent } from './example1/search/search.component';
import { ProductsComponent } from './example1/products/products.component';
import { ReferenceTemplateComponent } from './example1/reference-template/reference-template.component';
import { CustomerListComponent } from './example1/customer-list/customer-list.component';
import { ViewChildComponent } from './example1/view-child/view-child.component';
import { ViewChildDemoComponent } from './example1/view-child-demo/view-child-demo.component';
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
import { MatIconModule } from '@angular/material/icon';
import { IfDirective } from './example3/directive/if.directive';
import { JavascriptComponent } from './example4/javascript/javascript.component';
import { AngularComponent } from './example4/angular/angular.component';
import { DataExampleComponent } from './example4/data-example/data-example.component';
import { AllUsersComponent } from './example5/all-users/all-users.component';
import { UserDetailComponent } from './example5/user-detail/user-detail.component';
import { AppRoutingModule } from './app-routing.module';

import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { Example5Component } from './example5/example5.component';
import { Example6Component } from './example6/example6.component';
import { Example7Component } from './example7/example7.component';
import { Comp1Component } from './example7/comp1/comp1.component';
import { Comp2Component } from './example7/comp2/comp2.component';
import { Comp3Component } from './example7/comp3/comp3.component';
import { Example8Component } from './example8/example8.component';
import { Example9Component } from './example9/example9.component';
import { CourseComponent } from './example9/course/course.component';
import { ErrorComponent } from './error/error.component';
import { Example11Component } from './example11/example11.component';
import { PercentagePipe } from './example12/pipe/percentage.pipe';
import { Example12Component } from './example12/example12.component';
import { FilterPipe } from './example12/pipe/filter.pipe';
import { Example13Component } from './example13/example13.component';
import { Example14Component } from './example14/example14.component';

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
    LifecycleComponent,
    LifecycleDemoComponent,
    ContentChildComponent,
    SetbackgroundDirective,
    CustomDirectiveComponent,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective,
    HighlightDirective2,
    IfDirective,
    JavascriptComponent,
    AngularComponent,
    DataExampleComponent,
    AllUsersComponent,
    UserDetailComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    Example6Component,
    Example7Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Example8Component,
    Example9Component,
    CourseComponent,
    ErrorComponent,
    Example11Component,
    PercentagePipe,
    Example12Component,
    FilterPipe,
    Example13Component,
    Example14Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
