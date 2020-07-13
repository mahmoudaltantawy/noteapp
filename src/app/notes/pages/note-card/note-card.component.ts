import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-note-card",
  templateUrl: "./note-card.component.html",
  styleUrls: ["./note-card.component.scss"],
})
export class NoteCardComponent implements OnInit {
  @ViewChild("sector", { static: false }) sector: ElementRef<HTMLElement>;
  @ViewChild("bodyText", { static: false }) bodyText: ElementRef<HTMLElement>;
  @Input("title") title: any;
  @Input("body") body: any;
  @Input("link") link: any;
  @Output("delete") deleteEvent: EventEmitter<void> = new EventEmitter<void>();
  constructor(private render: Renderer2) {}

  ngOnInit() {
    if (this.bodyText || this.sector) {
      let style = window.getComputedStyle(this.bodyText.nativeElement, null);
      let viewableheight = parseInt(style.getPropertyValue("height"), 10);
      if (this.bodyText.nativeElement.scrollHeight > viewableheight) {
        this.render.setStyle(this.sector.nativeElement, "display", "block");
      } else {
        this.render.setStyle(this.sector.nativeElement, "display", "none");
      }
    }
  }
  deleteFun() {
    this.deleteEvent.emit();
  }
}
