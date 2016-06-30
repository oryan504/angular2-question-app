import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MainCardComponent } from './main-card/main-card.component';
import { StartCardComponent } from './start-card/start-card.component';
import { SubmitCardComponent } from './submit-card/submit-card.component';
import { TestService } from './test-data.service';



@Component({
  moduleId: module.id,
  selector: 're-question-app-app',
  templateUrl: 're-question-app.component.html',
  styleUrls: ['re-question-app.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MainCardComponent, StartCardComponent, SubmitCardComponent ],
  providers: [TestService]
})

export class REQuestionAppAppComponent {
  
 public navPosition: number = 0;
 tests: any[] =[];
 

 constructor(private testService: TestService) { }

  // getTest() {
  //       this.testService.getVod()
  //       .subscribe(
  //       data => { this.tests = data},
  //       err => console.error(err),
  //       () => console.log('done')
  //     );

  // }


  // getTest(value:string) {
  //   if(value=='vod'){
  //       this.testService.getVod()
  // } else if(value=='live'){
  //       this.testService.getLive()
  // }else{
  //       this.testService.getWebConfrence()
  // }
  //   this.tests = this.testService.myTest.name;
  // }





}

