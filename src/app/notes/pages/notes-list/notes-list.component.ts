import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { notesModel } from "src/app/shared/note.model";
import { NotesService } from "src/app/shared/services/notes.service";

@Component({
  selector: "app-notes-list",
  templateUrl: "./notes-list.component.html",
  styleUrls: ["./notes-list.component.scss"],
})
export class NotesListComponent implements OnInit {
  noteList: notesModel[] = new Array<notesModel>();
  filteredNotes: any[];

  @ViewChild("filterInput", { static: false }) filterInputRef: ElementRef<
    HTMLInputElement
  >;
  constructor(private noteService: NotesService) {}

  ngOnInit() {
    this.noteList = this.noteService.getAllNotes();
    this.filteredNotes = this.noteService.getAllNotes();
  }

  deleteNote(note) {
    let noteId = this.noteService.getId(note);
    this.noteService.deleteNote(noteId);
    if (this.filterInputRef.nativeElement.value) {
      this.filter(this.filterInputRef.nativeElement.value);
    }
  }
  generateLink(note) {
    let noteId = this.noteService.getId(note);
    return noteId;
  }

  filter(query: string) {
    debugger;
    query = query.toLowerCase().trim();
    let allResults: notesModel[] = new Array<notesModel>();
    //  split up the query to individual strings
    let terms: string[] = query.split(" "); // split by space
    // remove duplicated items
    this.removeDuplicates(terms); //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Call Method
    //compile relevant notes into allresult array
    terms.forEach((element) => {
      let results = this.relevantNotes(element); //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Call Method
      allResults = [...allResults, ...results];
    });
    this.filteredNotes = this.removeDuplicates(allResults);
  }
  removeDuplicates(arr: Array<any>): Array<any>[] {
    let uniqueResults: Set<any> = new Set<any>();
    arr.forEach((e) => {
      uniqueResults.add(e);
    });
    return Array.from(uniqueResults);
  }
  relevantNotes(query: string): Array<notesModel> {
    let relevent = this.noteList.filter((note) => {
      if (note.title && note.title.toLowerCase().includes(query)) {
        return true;
      } else if (note.body && note.body.toLowerCase().includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    return relevent;
  }
}
