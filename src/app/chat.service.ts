import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://run.mocky.io/v3/7ed6f09f-6ffb-4fa1-bd05-9e1ee87c28b6';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { message });  // Enviamos el mensaje al backend
  }
}
