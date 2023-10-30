import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    public dialogRef: DialogRef<DialogComponent>,
    public globalService: GlobalService,
    public localService: LocalService
  ) {}
}
