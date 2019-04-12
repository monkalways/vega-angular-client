import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MakeService {
  constructor(private httpClient: HttpClient) {}

  getMakes() {
    return this.httpClient.get('https://localhost:5001/api/makes');
  }
}
