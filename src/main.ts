import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { REQuestionAppAppComponent, environment } from './app/';
import { MainCardComponent } from './app/main-card';
import { StartCardComponent } from './app/start-card';
import { SubmitCardComponent } from './app/submit-card';

if (environment.production) {
  enableProdMode();
}

bootstrap(REQuestionAppAppComponent, [ HTTP_PROVIDERS ]);
