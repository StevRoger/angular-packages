import { Component, OnInit } from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  positions: any;
  fbuser: any;
  gguser: any;
  constructor(
    private readonly _authService: SocialAuthService,
    private clipboard: Clipboard
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
      this.fbuser = JSON.stringify(user);
    });
  }

  signInWithGoogle(): void {
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      localStorage.setItem('GOOGLE_USER', JSON.stringify(user));
      this.gguser = JSON.stringify(user);
    });
  }

  copyToClipboard(value: any): void {
    this.clipboard.copy(value);
  }
}
