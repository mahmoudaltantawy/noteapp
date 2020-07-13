import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NotesRoutingModule } from "./notes-routing.module";
import { NotesListComponent } from "./pages/notes-list/notes-list.component";
import { NoteCardComponent } from "./pages/note-card/note-card.component";
import { NoteDetailsComponent } from "./pages/note-details/note-details.component";
import { FormsModule } from "@angular/forms";
import { TrimDirective } from "../shared/directives/trim.directive";
import { InputTrimModule } from "ng2-trim-directive";

@NgModule({
  declarations: [
    NotesListComponent,
    NoteCardComponent,
    NoteDetailsComponent,
    TrimDirective,
  ],
  imports: [CommonModule, NotesRoutingModule, FormsModule, InputTrimModule],
})
export class NotesModule {}
