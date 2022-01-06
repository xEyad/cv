import { Component, OnInit } from '@angular/core';
import { faCamera, faUser,faPhone} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-section-selector',
  templateUrl: './section-selector.component.html',
  styleUrls: ['./section-selector.component.scss']
})
export class SectionSelectorComponent implements OnInit {
  faCamera = faCamera;
  faPhone = faPhone;
  faUser = faUser;
  constructor() { }

  ngOnInit() {
  }

}
