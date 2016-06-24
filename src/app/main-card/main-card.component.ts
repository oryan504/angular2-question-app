import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';


@Component({
  moduleId: module.id,
  selector: 'app-main-card',
  templateUrl: 'main-card.component.html',
  styleUrls: ['main-card.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CHECKBOX_DIRECTIVES]
})


export class MainCardComponent implements OnInit {

  constructor() {}
  
  'results': any[] =[];

  'questionArray' : any[] =  ['This is the first question?', 'The second Question?'];
  'testTitle'=  'This is the Test Title';
  'answerChoices' : any = [
 	 {'letter':'a','choice':'A answer'},
 	 {'letter':'b','choice':'B answer'},
 	 {'letter':'c','choice':'C answer'}];


 public questionNumber : number = 0;
 public question : string = this.questionArray[this.questionNumber];


 public saveAnswer: ()=> any =
   function(): any {
     this.results.push({'question':this.question,'answer':'placeholder'});
     console.log(this.results);
    return this.questionNumber; 
 };

 public nextQuestion: ()=>number =
   function(): number {
    this.questionNumber++;
    console.log(this.questionNumber);
    return this.questionNumber; 
 };

 public previousQuestion: ()=>number =
  function(): number{
  	if(this.questionNumber > 0){
  		this.questionNumber--;
  	}
 	  console.log(this.questionNumber);
 	  return this.questionNumber; 
 }

// public saveQuiz: ()=> any =
//   function(): any{
//     this.navPosition = 100;
//     console.log('save quiz');
//     return this.question;
//   }

   

  ngOnInit() {
  

  }

}






















