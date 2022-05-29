import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks: any[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public addNewTask(): void {
    const dialogRef = this.dialog.open(AddTaskComponent);

    dialogRef.afterClosed().subscribe((returnData) => {
      this.addNewTaskToList(returnData);
    });
  }

  public addNewTaskToList(task: any): void {
    this.tasks.push(task);
  }
}
