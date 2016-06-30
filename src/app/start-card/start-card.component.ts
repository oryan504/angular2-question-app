import { Component, OnInit, EventEmitter } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';


@Component({
  moduleId: module.id,
  selector: 'app-start-card',
  templateUrl: 'start-card.component.html',
  styleUrls: ['start-card.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES],
   outputs:['quizStarted', 'selectedTest']
})

export class StartCardComponent implements OnInit {
    quizStarted = new EventEmitter<string>();
    selectedTest = new EventEmitter<string>();

    tempSelectTest:string;
    userInformation:any;

    onChange(value: string){
    	this.quizStarted.emit(value);
    }
    
    onSelectTest(value:string){
      this.tempSelectTest = value;
      this.selectedTest.emit(value);
    }
    
    onInfo(name:string, email:string, company:string, myNumber:number, comments:string){
      this.userInformation = {'name': name, 'email': email, 'company': company, 'phone': myNumber, 'comments': comments };
    }
    
    
    constructor() {}

    ngOnInit() {}
}
