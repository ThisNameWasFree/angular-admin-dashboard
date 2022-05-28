import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class TasksModule { }
