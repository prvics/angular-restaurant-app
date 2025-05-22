import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toasts: Toast[] = [];
  private toastSubject = new Subject<Toast[]>();
  toastState$ = this.toastSubject.asObservable();
  private idCounter = 0;

  showToast(message: string, type: ToastType = 'info') {
    const toast: Toast = {
      id: ++this.idCounter,
      message,
      type,
    };

    this.toasts.unshift(toast);
    this.toastSubject.next([...this.toasts]);

    setTimeout(() => {
      this.toasts = this.toasts.filter((t) => t.id !== toast.id);
      this.toastSubject.next([...this.toasts]);
    }, 3000);
  }
}
