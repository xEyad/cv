import { Component, OnInit } from '@angular/core';
import { faFileAlt} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  technologies = [
    {
      icon:'assets/flutter.png',
      name:"Flutter",
      desc:`I Build stunning mobile apps for Android and IOS`
    },
    {
      icon:'assets/angular.png',
      name:"Angular",
      desc:`I build effecient Web apps and systems using Angular 5+  `
    },
    {
      icon:'assets/extendscript.png',
      name:"Extendscript",
      desc:`That's what i use for automating photoshop tasks`
    },
    {
      icon:'assets/web.png',
      name:"JS,TS,CSS3,HTML5,JQUERY",
      desc:`I call this web bundle, i use it collectively for creating simple websites or landing pages`
    },
    {
      icon:'assets/nodejs.png',
      name:"NodeJs",
      desc:`I use it for general development tasks, automations and code generation`
    },
    {
      icon:'assets/dart.png',
      name:"Dart",
      desc:`I use it for general development tasks, automations and code generation`
    },
    {
      icon:'assets/ahk.png',
      name:"AHK",
      desc:`I use Auto Hot Key for general windows automation tasks`
    },
    {
      icon:'assets/qt.png',
      name:"QT",
      desc:`That's what i use IF i needed to make a GUI C++ app`
    },
  ];

  experience = [
    {
      company:"Fabrica dev - software engineer",
      duration:'01/2019 – present',
      activities:[
        {
          title:'Connect Homes',
          desc:`Designed, developed and deployed connect homes internal web system and mobile app, connect homes is one of major brokers in Egypt. currently holding over 300K leads and works with more than 30+ developers.`},
        {
          title:'RE/MAX Egypt',
          desc:`Designed, developed and deployed RE/MAX Egypt internal CRM system that operates and manage the leads coming from the CAPTOUR project and distributing it to sub RE/MAX offices/franchises.`},
        {
          title:'Waterway',
          desc:`Worked on Waterway internal web system. designed and implemented it’s EOI module. Also, built it’s mobile app using flutter. “Waterway” is a major realestate developer in Egypt and the solution manages their internal CRM system.`},
        {
          title:'Castle developments',
          desc:`Worked on Castle developments internal web system, designed and implemented their helpdesk system and built its mobile app that manages their internal CRM and units’ reservations using flutter `},
        {
          title:'JD Holdings',
          desc:`Worked on JD Holdings internal web system. This system is used by all 4 major developers under the parent company JD Holdings.`},
        {
          title:'Axis',
          desc:`Built axis internal web system. Axis is realestate broker based on egypt`},
      ]
    },
    {
      company:"Psycoders - software engineer",
      duration:'01/2020 – present',
      activities:[
        {
          title:'NewGame',
          desc:`Built NewGame e-commerce website. NewGame is boardgames manufcaturer and distributor in egypt.`
        },
        {
          title:'Diet Academy',
          desc:`Worked on Diet academy web dashboard and built it’s mobile app. Diet academy is solution that enables users to reserve video or chat packages with the doctor and maintain patient information.`
        },
        {
          title:'Bondo',
          desc:`Worked on Bondo web dashboard and Built it’s mobile app. Bondo is a small scale social media that operates over the map, where user can record a voicenote and add some metadata to it. then it will be shown over the google map and other users can interact with it.`
        },
        {
          title:'Egyptian Vets Syndicate',
          desc:`Built Egyptian vets syndicate mobile app.`
        },
        {
          title:'Venu Egypt',
          desc:`Built Venu dine in mobile app`
        },
      ]
    },
    {
      company:"Fiverr - Photoshop Automator",
      duration:'01/2017 – present',
      activities:[
        {
          title:'Photoshop scripts',
          desc:`Successfully created and delivered over 200 photoshop script and automation solutions to 100+ client in more than 16 country`,
        }
      ]
    },
  ];

  faFileAlt = faFileAlt;
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
