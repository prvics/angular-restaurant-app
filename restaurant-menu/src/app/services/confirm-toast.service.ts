import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmToastService {
  private confirmSubject = new Subject<{
    message: string;
    onConfirm: () => void;
    onCancel?: () => void;
  }>();

  confirmState$ = this.confirmSubject.asObservable();

  showConfirm(message: string, onConfirm: () => void, onCancel?: () => void) {
    this.confirmSubject.next({ message, onConfirm, onCancel });
  }
}
