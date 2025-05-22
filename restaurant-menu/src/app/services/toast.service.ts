import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type ToastType = 'success' | 'error' | 'info';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new Subject<{ message: string; type: ToastType }>();
  toastState$ = this.toastSubject.asObservable();

  showToast(message: string, type: ToastType = 'info') {
    console.log(
      'ToastService: showToast called with message:',
      message,
      'type',
      type
    );

    this.toastSubject.next({ message, type });
  }
}
