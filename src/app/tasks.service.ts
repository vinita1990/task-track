import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/subject';
import 'rxjs/add/operator/map';

@Injectable()
export class TasksService {
  private apiURL = "https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks";
  public newTaskSubject = new Subject<any>();
  tasksInfo$ = this.newTaskSubject.asObservable();

  constructor(private http: Http) { }
   getData(){
     return this.http.get(this.apiURL)
     .map((res:Response) => res.json());
   }
   addTasks(data){
     //data.title = "hello";
     this.newTaskSubject.next(data);
   }

  
}
