import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

import { TabInterface } from './interfaces/tab.interface';
import { DropdownInterface } from './interfaces/dropdown.interface';
import { Tabs } from './mocks/tab-mock';
import { Dropdowns } from './mocks/dropdown-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('tabset', { static: false }) tabset: TabsetComponent;

  tabs: TabInterface[] = Tabs;
  dropdowns: DropdownInterface[] = Dropdowns;
  selectedDD: DropdownInterface = Dropdowns[0];

  selectTab(tabId: number) {
    this.tabset.tabs[tabId].active = true;
  }

  selectDD(dd: DropdownInterface) {
    this.selectedDD = dd;
  }
}
