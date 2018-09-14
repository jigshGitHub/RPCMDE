import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//You launch your app by bootstrapping the root NgModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
