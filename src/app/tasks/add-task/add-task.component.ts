import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

interface SelectList {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  public tracker: SelectList[] = [
    { value: 'task', viewValue: 'Task' },
    { value: 'bug', viewValue: 'Bug' },
    { value: 'spike', viewValue: 'Spike' },
    { value: 'oncall', viewValue: 'Oncall' },
    { value: 'epic', viewValue: 'Epic' },
    { value: 'user story', viewValue: 'User Story' }
  ];

  public statuses: SelectList[] = [
    { value: 'new', viewValue: 'New' },
    { value: 'approval required', viewValue: 'Approval Required' },
    { value: 'approved', viewValue: 'Approved' },
    { value: 'on hold', viewValue: 'On Hold' },
    { value: 'in progress', viewValue: 'In Progress' },
    { value: 'waiting', viewValue: 'Waiting' },
    { value: 'implemented', viewValue: 'Implemented' },
    { value: 'feedback', viewValue: 'Feedback' },
    { value: 'ready for user testing', viewValue: 'Ready for User Testing' },
    { value: 'ready for production', viewValue: 'Ready for Production' },
    { value: 'closed / accepted', viewValue: 'Closed / Accepted' },
    { value: 'rejected', viewValue: 'Rejected' },
    { value: 'duplicate', viewValue: 'Duplicate' }
  ];

  public priorities: SelectList[] = [
    { value: 'low', viewValue: 'Low' },
    { value: 'normal', viewValue: 'Normal' },
    { value: 'high', viewValue: 'High' },
    { value: 'urgent', viewValue: 'Urgent' },
    { value: 'immediate', viewValue: 'Immediate' }
  ];

  public importance: SelectList[] = [
    { value: 'blocking', viewValue: 'Blocking' },
    { value: 'important', viewValue: 'Important' },
    { value: 'normal', viewValue: 'Normal' },
    { value: 'would be nice', viewValue: 'Would be Nice' }
  ];

  public selectedTracker = this.tracker[0].value;
  public subject: string = '';
  public description: string = '';
  public selectedStatus = this.statuses[0].value;
  public selectedPriority = this.priorities[1].value;
  public selectedImportance = this.importance[0].value;
  public donePercent: number = 0;

  // public assignee
  // public files
  // public parentTask: number = 0;
  // public startDate
  // public dueDate
  // public estimatedTime
  // public contract

  constructor(public dialogRef: MatDialogRef<AddTaskComponent>
  ) { }

  ngOnInit(): void {
  }

  saveTask() {
    if (this.donePercent > 100) {
      this.donePercent = 100;
    }

    const taskObject: any = {
      subject: this.subject,
      description: this.description,
      selectedTracker: this.selectedTracker,
      selectedStatus: this.selectedStatus,
      selectedPriority: this.selectedPriority,
      selectedImportance: this.selectedImportance,
      donePercent: this.donePercent
    };

    let dataToReturn = taskObject;

    this.dialogRef.close(dataToReturn);
  }

}
