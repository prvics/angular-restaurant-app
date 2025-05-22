import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConfirmToastService } from '../../services/confirm-toast.service';

@Component({
  selector: 'app-confirm-toast',
  imports: [CommonModule],
  templateUrl: './confirm-toast.component.html',
  styleUrl: './confirm-toast.component.css',
})
export class ConfirmToastComponent implements OnInit {
  visible = false;
  message = '';
  confirmFn: () => void = () => {};
  cancelFn: () => void = () => {};

  constructor(private confirmService: ConfirmToastService) {}

  ngOnInit(): void {
    this.confirmService.confirmState$.subscribe(
      ({ message, onConfirm, onCancel }) => {
        this.message = message;
        this.confirmFn = () => {
          onConfirm();
          this.visible = false;
        };
        this.cancelFn = () => {
          onCancel?.();
          this.visible = false;
        };
        this.visible = true;
      }
    );
  }
}
