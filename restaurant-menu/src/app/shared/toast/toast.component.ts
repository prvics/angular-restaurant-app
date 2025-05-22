import { Component } from '@angular/core';
import { ToastService, ToastType } from '../../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  showToast = false;
  message = '';
  type: ToastType = 'info';

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toastState$.subscribe(({ message, type }) => {
      this.message = message;
      this.type = type;
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    });
  }
}
