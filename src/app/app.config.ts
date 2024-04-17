import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthconfigInterceptor } from './shared/authconfig.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    {provide: HTTP_INTERCEPTORS, useClass:AuthconfigInterceptor, multi: true},
    provideRouter(routes),
  ]
};
