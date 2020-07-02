import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

/**Angular Material. */
import { MatSidenav } from '@angular/material/sidenav';

/**Services.*/
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  private end: Subject<boolean> = new Subject();
  
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }


  public logout(): void {
    this.authenticationService.logout();
  }
}
