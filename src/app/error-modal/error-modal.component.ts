import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent {
  @Input() isVisible = false;
  @Input() errorMessage: string = '';
  @Output() close = new EventEmitter<void>();  // Emitir un evento cuando el modal se cierra

  closeModal() {
    this.close.emit();  // Emitir el evento de cierre
  }
}
