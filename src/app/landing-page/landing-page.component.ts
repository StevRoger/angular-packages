import { Component, OnInit } from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from "angularx-social-login";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  positions: any;
  user: any;
  constructor(
    private readonly _authService: SocialAuthService,
  ) { }

  ngOnInit(): void {
  }

  onMapClick($event: any) {

  }

  onIdle($event: any) {

  }

  onMarkerInit($event: any) {

  }

  onMapReady($event: any) {

  }

  signInWithFB(): void {
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
      localStorage.setItem('FACEBOOK_USER', JSON.stringify(user));
      localStorage.removeItem('GOOGLE_USER');
      this.user = JSON.stringify(user);
      // this._router.navigateByUrl('home').then();
    });
  }

  signInWithGoogle(): void {
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      localStorage.setItem('GOOGLE_USER', JSON.stringify(user));
      this.user = JSON.stringify(user);
      localStorage.removeItem('FACEBOOK_USER');
      // this._router.navigateByUrl('home').then();
    });
  }
}
