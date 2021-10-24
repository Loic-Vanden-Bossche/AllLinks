import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthHttpInterceptor, AuthModule as Auth0Module } from "@auth0/auth0-angular";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Auth0Module.forRoot({
      domain: 'dev-h321cv6c.us.auth0.com',
      clientId: 'RhfCxWNEYnXiIsjw1YPe3UrcseLgoUM9',
      audience: 'http://localhost:3000',
      redirectUri: `${window.location.origin}/callback`,
      httpInterceptor: {
        allowedList: [
          {
            uri: 'http://localhost:3000/*',
          }
        ]
      }
    }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }]
})
export class AuthModule { }
