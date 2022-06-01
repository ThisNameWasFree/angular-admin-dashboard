import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AddTaskComponent } from "../add-task/add-task.component";
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks: any[] = [];
  public color: ThemePalette = 'primary';

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
