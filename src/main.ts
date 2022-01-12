import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

//Once the appmodule is initialized, then the appcomponent is initliazed, and after the index.html
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
