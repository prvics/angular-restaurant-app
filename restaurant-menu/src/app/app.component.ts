import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ToastComponent } from './shared/toast/toast.component';
import { ConfirmToastComponent } from './shared/confirm-toast/confirm-toast.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    ToastComponent,
    ConfirmToastComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router, public auth: AuthService) {}

  isDark = false;

  get showNavBar(): boolean {
    return this.router.url !== '/';
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    const root = document.documentElement;
    root.classList.toggle('dark-theme', this.isDark);
  }

  logout() {
    this.auth.setAdmin(false);
    this.router.navigate(['/']);
  }
}
