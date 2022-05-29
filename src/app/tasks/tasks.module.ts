import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { MatButtonModule } from "@angular/material/button";
import { AddTaskComponent } from './add-task/add-task.component';
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    TasksComponent,
    AddTaskComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatIconModule
    ]
})
export class TasksModule { }
