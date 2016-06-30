import { Component, OnInit, EventEmitter } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';
import { MD_RADIO_DIRECTIVES } from '@angular2-material/radio';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { TestService } from '../test-data.service';


@Component({
  moduleId: module.id,
  selector: 'app-main-card',
  templateUrl: 'main-card.component.html',
  styleUrls: ['main-card.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CHECKBOX_DIRECTIVES,  MD_RADIO_DIRECTIVES],
  providers: [TestService], 
  outputs:['quizSaved'],


})


export class MainCardComponent implements OnInit {
   quizSaved = new EventEmitter<string>();
   results: any[] =[];
   tests: any[] =[];
   questions: any[]= [];
   answers: any[]=[];
   
   optionsChecked:any[] = [];

   currentQuestion: string;
   currentAnswers: any[]=[];
   userAnswer: string;

   firstQuestionState: boolean= true;
   lastQuestionState: boolean = false;



   public questionNumber : number = 0;
   //public question : string = this.questionArray[this.questionNumber];
  

  constructor(private http: Http, private testService: TestService) {}

  ngOnInit() {
    this.getTest();
    this.firstQuestion();
  }
  
  getTest() {
        this.testService.getVod()
        .subscribe(
        data => { 
          this.tests = data;
          for (let i of data.testQuestions) {
              this.questions.push(i.question);
              this.answers.push(i.answers);
           }
        },
        err => console.error(err),
        () => console.log('done')
      );

  }

 onSave(value: string){
   this.quizSaved.emit(value);
 }


 public saveAnswer(value: string){
   console.log(value);
 };


 public nextQuestion(){
      if(this.questionNumber < this.questions.length - 1){
        this.questionNumber++;
      }
      else{
        this.lastQuestionState= true;
      }
    this.firstQuestionState= false;
 };

 
 public firstQuestion(){
    this.questionNumber= 0;
 };


 public previousQuestion: ()=> number =
  function(): number{
      	if(this.questionNumber > 0){
          this.results.pop();
      		this.questionNumber--;
      	}
        else{
          this.firstQuestionState= true;
        }
    this.lastQuestionState= false;
 	  return this.questionNumber; 
 }
}



