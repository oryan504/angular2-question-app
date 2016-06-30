
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
export interface IMyTest {
  name:any;
  testQuestions: any;
}


@Injectable()
export class TestService {
constructor(private http: Http) { }


 myTest: IMyTest = {
 	    name: 'this name',
      testQuestions: 'this question'
   };


getVod(): Observable<any> {
    return this.http.get('vodTest.json')
      .map((res:Response) => {
        console.log('res: ', res);
        return res.json();
      });

  }

  getLive(): Observable<any> {
    return this.http.get('liveTest.json')
      .map((res:Response) => {
        console.log('res: ', res);
        return res.json();
      });

  }

  getWebConfrence(): Observable<any> {
    return this.http.get('webConferencingTest.json')
      .map((res:Response) => {
        console.log('res: ', res);
        return res.json();
      });
  }

}



//Look at this code !!!!
// getVod(): Observable<IMyTest[]> {
//     return this.http.get('vodTest.json')
//       .map((res:Response): IMyTest[] => {
//         return res = res.json();
//       })
//       .map((res: any) => {
//         if (res.name === 'VOD') {
//           return res.testQuestions;
//         }
//       });
//   }