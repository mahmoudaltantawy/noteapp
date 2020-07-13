import { Injectable } from "@angular/core";
import { notesModel } from "../note.model";

@Injectable({
  providedIn: "root",
})
export class NotesService {
  notesArr: notesModel[] = new Array<notesModel>();
  constructor() {}
  getAllNotes() {
    if (localStorage.getItem("notes")) {
      let notes: notesModel[] = JSON.parse(localStorage.getItem("notes"));
      if (notes.length) {
        this.notesArr = notes;
      } else {
        localStorage.removeItem("notes");
      }
      return this.notesArr;
    }
    return this.notesArr;
  }
  get(id: number) {
    return this.notesArr[id];
  }
  getId(note: notesModel) {
    return this.notesArr.indexOf(note);
  }
  addNote(note: notesModel) {
    console.log(this.notesArr);
    //add note to notesArr and return id of this note
    // id = length
    let newLength = this.notesArr.push(note);

    let index = newLength - 1;
    localStorage.setItem("notes", JSON.stringify(this.notesArr));

    return index;
  }
  updateNote(id: number, title: string, body: string) {
    let note = this.notesArr[id];
    note.title = title;
    note.body = body;
  }
  deleteNote(id: number) {
    this.notesArr.splice(id, 1);
    localStorage.setItem("notes", JSON.stringify(this.notesArr));
  }
}
