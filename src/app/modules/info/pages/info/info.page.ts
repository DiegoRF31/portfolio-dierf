import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: false,
  templateUrl: './info.page.html',
  styleUrl: './info.page.css'
})
export class InfoPage {
   activeTab: 'skills' | 'experience' | 'education' = 'skills';

  setActiveTab(tab: 'skills' | 'experience' | 'education') {
    this.activeTab = tab;
  }
}
