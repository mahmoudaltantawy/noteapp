import { Component, OnInit } from "@angular/core";
import { notesModel } from "src/app/shared/note.model";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap, Params } from "@angular/router";
import { NotesService } from "src/app/shared/services/notes.service";
@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.component.html",
  styleUrls: ["./note-details.component.scss"],
})
export class NoteDetailsComponent implements OnInit {
  note: notesModel;
  noteId: number;
  new: boolean;
  constructor(
    private noteService: NotesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.note = new notesModel();
    this.activeRoute.paramMap.subscribe((myparams: Params) => {
      if (myparams.get("id") == "newNote") {
        this.new = true;
      } else {
        this.note = this.noteService.get(myparams.get("id"));
        this.noteId = myparams.get("id");
        this.new = false;
      }
    });
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.new) {
        this.noteService.addNote(form.value);
      } else {
        this.noteService.updateNote(
          this.noteId,
          form.value.title,
          form.value.body
        );
      }
      this.router.navigate([""]);
    }
  }
}
