import { ErrorModule } from "./error/error.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PhotosModule } from "./photos/photos.module";
import { LayoutModule } from "./layout/layout.module";
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [AppComponent, ContatoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    ErrorModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
