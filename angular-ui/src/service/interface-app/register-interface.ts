import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api-service';
import { LoginResponseInterface } from '../interface-model/response/login-response.interface';
import { RegisterRequest } from '../interface-model/request/register-request.interface';



@Injectable({ providedIn: 'root' })
export class RegisterInterface {
  constructor(private apiService: ApiService) {}

  register(payload: RegisterRequest): Observable<LoginResponseInterface> {
    return this.apiService.post('/api/User/register', payload);
  }
}
