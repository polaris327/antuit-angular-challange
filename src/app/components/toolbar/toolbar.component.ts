import { Component, OnInit } from '@angular/core';
import { ToolbarItemInterface } from '../../interfaces/toolbarItem.interface';
import { ToolbarMenuItemInterface } from '../../interfaces/toolbarMenuItem.interface';
import { ToolbarItems } from '../../mocks/toolbar-mock';
import { ToolbarMenuItems } from '../../mocks/toolbar-menu-mock';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  toolbarItems: ToolbarItemInterface[] = ToolbarItems;
  toolbarMenuItems: ToolbarMenuItemInterface[] = ToolbarMenuItems;
  selectedItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  prev() {
    if (this.selectedItemIndex > 0) {
      this.selectedItemIndex--;
    }
  }

  next() {
    if (this.selectedItemIndex < this.toolbarItems.length - 1) {
      this.selectedItemIndex++;
    }    
  }
}
