import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api-service';
import { LoginResponseInterface } from '../interface-model/response/login-response.interface';

export interface RegisterRequest {
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class RegisterInterface {
  constructor(private apiService: ApiService) {}

  register(payload: RegisterRequest): Observable<LoginResponseInterface> {
    return this.apiService.post('/api/User/register', payload);
  }
}
