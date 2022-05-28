import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { MatButtonModule } from "@angular/material/button";
import { AddTaskComponent } from './add-task/add-task.component';
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    TasksComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class TasksModule { }
