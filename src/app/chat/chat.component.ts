import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de que esté importado
import { ChatService } from '../chat.service';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorModalComponent],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  messages: { text: string, type: 'user' | 'server' }[] = [];
  newMessage: string = ''; // Aquí se guarda el mensaje del usuario
  showErrorModal = false;
  errorMessage = '';

  constructor(private chatService: ChatService) {}

  send() {
    const msg = this.newMessage.trim();
    if (!msg) return;

    // Agregar mensaje del usuario al chat
    this.messages.push({ text: msg, type: 'user' });

    console.log("Sending message:", msg);

    this.chatService.sendMessage(msg).subscribe({
      next: (response) => {
        if (response && response.message) {
          this.messages.push({ text: response.message, type: 'server' });
        }
        this.newMessage = '';  // Limpiar el campo de texto después de enviar
        this.showErrorModal = false;
      },
      error: (err) => {
        console.error("Error in sending message:", err);
        this.showErrorModal = true;
        this.errorMessage = 'Error, no conseguimos conectar con el backend';
      },
    });
  }

  closeErrorModal() {
    this.showErrorModal = false;
  }
}
