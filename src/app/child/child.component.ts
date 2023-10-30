import { Component, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { LocalService } from '../local.service';
import { GlobalService } from '../../../.history/src/app/global.service_20231030170956';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [LocalService],
})
export class ChildComponent {
  constructor(
    private matDialog: MatDialog,
    public globalService: GlobalService,
    public localService: LocalService,
    public viewContainerRef: ViewContainerRef
  ) {}

  open() {
    this.globalService.globalCount++;
    this.localService.localCount++;
    this.matDialog.open(DialogComponent, {
      width: '80%',
      viewContainerRef: this.viewContainerRef,
    });
  }
}
