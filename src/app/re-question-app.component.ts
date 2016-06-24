import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MainCardComponent } from './main-card/main-card.component';
import { StartCardComponent } from './start-card/start-card.component';
import { SubmitCardComponent } from './submit-card/submit-card.component';



@Component({
  moduleId: module.id,
  selector: 're-question-app-app',
  templateUrl: 're-question-app.component.html',
  styleUrls: ['re-question-app.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MainCardComponent, StartCardComponent, SubmitCardComponent ]
})
export class REQuestionAppAppComponent {
  
 public navPosition: number = 0;

 public navStartTest: ()=>number =
   function(): number {
    	this.navPosition++;
    	return this.navPosition; 
 };



}

