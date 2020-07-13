import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoteComponent } from "./layout/note/note.component";
// import { TrimDirective } from './shared/directives/trim.directive';

@NgModule({
  declarations: [AppComponent, NoteComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
