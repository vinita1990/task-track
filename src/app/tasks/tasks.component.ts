import { Component, OnInit, ViewChild } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private tasksService : TasksService) { }
  @ViewChild('newTaskForm') newTaskForm;
  tasks : any;
  data : any = {};
  taskData;
  taskInfo;
  newData: Array<string> = [];
  subscription: Subscription;
  title: string;
  ngOnInit() {
      this.tasksService.getData()
      .subscribe(data => { this.taskData = data; console.log(data) })
  }

  onTaskSubmit(data) : void {
    this.newData.push(data);
    this.newTaskForm.reset();
  }
  deleteRow(rowNumber: number){
      this.newData.splice(rowNumber, 1);
  }

}
