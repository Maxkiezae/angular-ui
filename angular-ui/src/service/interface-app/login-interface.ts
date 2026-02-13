import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api-service';
import { LoginResponseInterface } from '../interface-model/response/login-response.interface';
import { LoginRequestInterface } from '../interface-model/request/login-request.interface';



@Injectable({ providedIn: 'root' })
export class LoginInterface {
  constructor(private apiService: ApiService) {}

  login(payload: LoginRequestInterface): Observable<LoginResponseInterface> {
    return this.apiService.post('/api/Authen/login', payload);
  }
}
