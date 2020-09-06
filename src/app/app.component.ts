import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  title = 'antuit-angular-challenge';

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
}
