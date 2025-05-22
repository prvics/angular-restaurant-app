import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAdminUser = false;

  setAdmin(value: boolean): void {
    this.isAdminUser = value;
  }

  isAdmin(): boolean {
    return this.isAdminUser;
  }
}
