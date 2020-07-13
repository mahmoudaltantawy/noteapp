import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appTrim]",
})
export class TrimDirective implements OnInit {
  req: boolean = false;
  constructor(private eleRef: ElementRef, private render: Renderer2) {}
  ngOnInit() {
    const npt = this.eleRef.nativeElement;

    npt.addEventListener("blur", () => {
      this.checkSpaces();
      this.makePrestine();
      npt.value = npt.value.trim();
      npt.value = npt.value === "" ? "" : npt.value || null;
    });
  }
  checkSpaces() {
    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "");
      };
    }
  }
  makePrestine() {
    const npt = this.eleRef.nativeElement;
    if (!npt.value.replace(/\s/g, "").length) {
      console.log(this.eleRef);
      npt.required = true;
    }
  }
}
