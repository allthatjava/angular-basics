import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService } from './example10/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-basics';
  message = 'This is my first Angular App';
  displayLoadingIndicator=true;

  constructor(private activatedRoute:ActivatedRoute, private authService: AuthService,
    private router:Router){}

  ngOnInit(){
    this.activatedRoute.fragment.subscribe((value) => {
      console.log(value);
      this.jumpTo(value!);
    });
    
    this.router.events.subscribe( (routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart ){
        console.log("navigation start");
        console.log(routerEvent);
        this.displayLoadingIndicator = true;
      }

      if(routerEvent instanceof NavigationEnd ){
        console.log("navigation end");
        this.displayLoadingIndicator = false;
      }
    });
    
  }

  jumpTo(section:string){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }

  login(){
    this.authService.login();
  }
  logout(){
    this.authService.logout();
  }

  isAuthenticated(){
      return this.authService.isAuthenticated();
  }
}
