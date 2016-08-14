import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule, environment } from './app/index';

if (environment.production) {
  enableProdMode();
}

browserDynamicPlatform().bootstrapModule(AppModule);
