import { Component, OnDestroy, OnInit } from '@angular/core';
import { LayoutService } from '@services/layout/layout.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';  // ✅ Import this
import { CommonModule } from '@angular/common';   // Optional: if you use *ngIf, etc.

@Component({
  standalone: true,  // ✅ Ensure it's declared as standalone
  selector: 'app-main',
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.css'],
  imports: [RouterModule, CommonModule]  // ✅ Import RouterModule here
})
export class MainLayout implements OnInit, OnDestroy {
  public theme: string;
  public themes: { [key: string]: string };
  private subscriptions: Subscription;

  constructor(private layoutService: LayoutService) {
    this.theme = null;
    this.themes = {
      light: 'dark',
      dark: 'light'
    };

    this.subscriptions = new Subscription();
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.layoutService.theme$.subscribe((theme) => {
      this.theme = theme;
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public changeTheme(): void {
    this.layoutService.theme$.next(this.themes[this.theme]);
  }
}