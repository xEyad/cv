import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  items = [
    {
      name:"Waterway",
      image:"assets/waterway.png",
      platform:"Web,Ios,Android",
      link:"https://play.google.com/store/apps/details?id=com.equity.erp"
    },
    {
      name:"NewGame",
      image:"assets/newgame.jpg",
      platform:"Web",
      link:"https://drive.google.com/drive/folders/1A3zWbGDB5RXWnHyIeGiNeKpo-Z0sbuYU?usp=sharing"
    },
    {
      name:"Diet Academy",
      image:"assets/diet academy.webp",
      platform:"Web,Ios,Android",
      link:"https://play.google.com/store/apps/details?id=com.attya.dietAcademy"
    },
    {
      name:"Castle Developments",
      image:"assets/castle developments.png",
      platform:"Web,Ios,Android",
      link:"https://play.google.com/store/apps/details?id=com.castle_developments.erp "
    },
    {
      name:"RE/MAX Egypt",
      image:"assets/remax.jpg",
      platform:"Web",
      link:"https://drive.google.com/drive/folders/1QBL4iNb0yYyk2o0r9amcgwxSAxYG6LoN?usp=sharing"
    },
    {
      name:"Connect Homes",
      image:"assets/connecthomes.png",
      platform:"Web,Ios,Android",
      link:"https://drive.google.com/drive/folders/1o0rgJ3f4htCBNtM_UN9ktwYSRfa61Gc-?usp=sharing"
    },
    {
      name:"JD Holdings",
      image:"assets/jd holdings.png",
      platform:"Web,Ios,Android",
      link:"https://drive.google.com/drive/folders/1o0rgJ3f4htCBNtM_UN9ktwYSRfa61Gc-?usp=sharing"
    },
    // {
    //   name:"Axis",
    //   image:"assets/waterway.jpg",
    //   platform:"Web,Ios,Android",
    //   link:""
    // },
    {
      name:"Egyptian Veterinarians Syndicate",
      image:"assets/vets.png",
      platform:"Ios,Android",
      link:"https://play.google.com/store/apps/details?id=com.vets.syndicate"
    },
    {
      name:"Bondo",
      image:"assets/bondo.png",
      platform:"Ios,Android",
      link:"https://play.google.com/store/apps/details?id=com.psycoders.bondotm"
    },

    {
      name:"Psycoders",
      image:"assets/psycoders.jpg",
      platform:"Web",
      link:"https://psycoders.tech/"
    },
    {
      name:"Venu Egypt",
      image:"assets/venu.jpg",
      platform:"Ios,Android",
      link:"https://drive.google.com/drive/folders/1SGRWgrOU_ean8hzPW1l2PzOrumbr6vjn?usp=sharing"
    },

    {
      name:"Visual Pathfinder",
      image:"assets/pathfinder.jpg",
      platform:"Technical Demo",
      link:"https://xeyad.github.io/maze_warrior"
    },

    {
      name:"Algorithm visualizer",
      image:"assets/algo_visualizer.png",
      platform:"Technical Demo",
      link:"https://xeyad.github.io/algo_visualizer"
    },

    {
      name:"Dynamic widgets builder",
      image:"assets/dynamic-widgets-builder.png",
      platform:"Technical Demo",
      link:"https://xeyad.github.io/widgets-demo"
    },

    {
      name:"Chess",
      image:"assets/chess.png",
      platform:"Technical Demo",
      link:"https://github.com/xEyad/Chess"
    },

  ];
  activeFilter:Filter = Filter.all;

  get Filter() {
    return Filter;
  }
  constructor() { }

  ngOnInit() {
  }

  setActiveFilter(filter:Filter)
  {
    this.activeFilter = filter;
  }

  getItems()
  {
    switch (this.activeFilter) {
      case Filter.all:
        return this.items;
      case Filter.web:
        return this.items.filter((item)=>item.platform.includes('Web'));
      case Filter.ios:
        return this.items.filter((item)=>item.platform.includes('Ios'));
      case Filter.android:
        return this.items.filter((item)=>item.platform.includes('Android'));
      case Filter.demo:
        return this.items.filter((item)=>item.platform.includes('Technical Demo'));
      default:
        return this.items;
    }
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
enum Filter{
  all,
  web,
  ios,
  android,
  demo
}
