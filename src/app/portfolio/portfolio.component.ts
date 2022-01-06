import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  items = Array(15);
  constructor() { }

  ngOnInit() {
  }
  downloadFile() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/cv.pdf';
    link.download = 'Eyad cv.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
