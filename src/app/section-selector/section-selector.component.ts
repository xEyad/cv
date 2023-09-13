import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { faCamera, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-section-selector",
  templateUrl: "./section-selector.component.html",
  styleUrls: ["./section-selector.component.scss"],
})
export class SectionSelectorComponent implements OnInit {
  faCamera = faCamera;
  faPhone = faPhone;
  faUser = faUser;
  _activeSelection: number = 0;
  @Output() activeSelection = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {
    this.setSelection(parseInt(localStorage.getItem("activeSelection")) || 0);
  }

  setSelection(val) {
    this._activeSelection = val;
    this.activeSelection.emit(this._activeSelection);
    localStorage.setItem("activeSelection", this._activeSelection.toString());
  }
}
