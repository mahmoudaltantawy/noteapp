import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoteComponent } from "./layout/note/note.component";

const routes: Routes = [
  {
    path: "",
    component: NoteComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./notes/notes.module").then((m) => m.NotesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
