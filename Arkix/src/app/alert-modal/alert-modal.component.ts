import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AlertModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {title:string, subtitle:string}) {}

  ngOnInit() {
  }
  
  okClicked(){
      this.dialogRef.close();
  }
}
