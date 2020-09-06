import { Component, OnInit, Input } from '@angular/core';
import { ToolbarMenuStatus } from '../../../enums/toolbar-menu-status.enum';
import {
  ToolbarMenuItemIconInterface,
  ToolbarMenuItemInterface
} from '../../../interfaces/toolbarMenuItem.interface';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent implements OnInit {
  @Input() toolbarMenuItem: ToolbarMenuItemInterface;

  constructor() { }

  ngOnInit(): void {
  }

  statusChanged(icon: ToolbarMenuItemIconInterface) {
    if (icon.status === ToolbarMenuStatus.INACTIVE) {
      icon.status = ToolbarMenuStatus.ACTIVE;
    } else {
      icon.status++;
    }
  }
}
