//our root app component
import { Component, ViewChild } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'my-app',
  template: `
    <my-tabs>
      <my-tab [tabTitle]="'Tab 1'">
        <my-tab [tabTitle]="'Tab 1-1'">
        baba
        </my-tab>
        <my-tab [tabTitle]="'Tab 1-2'">
        baba
        </my-tab>
      </my-tab>
      <my-tab tabTitle="Tab 2">
        Tab 2 content
      </my-tab>
    </my-tabs>
  `,
})
export class AppComponent {}
