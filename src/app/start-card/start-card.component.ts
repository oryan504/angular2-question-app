import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';


@Component({
  moduleId: module.id,
  selector: 'app-start-card',
  templateUrl: 'start-card.component.html',
  styleUrls: ['start-card.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES]
  
})
export class StartCardComponent implements OnInit {

  constructor() {}





  ngOnInit() {
  }

}
