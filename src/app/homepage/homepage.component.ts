import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { Usuario } from '../shared/model/usuario.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  private end: Subject<boolean> = new Subject();

  constructor(private router: Router,
    private authenticationService: AuthenticationService,) { }

  ngOnInit(): void {
    const usuario: Usuario = sessionStorage.getItem('usuario')
    ? JSON.parse(sessionStorage.getItem('usuario'))
    : null;

    if (usuario) {
      this.router.navigate(['/dashboard']);
    } else {
        this.authenticationService.logout();
    }
   }

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }
}
