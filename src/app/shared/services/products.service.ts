import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDonut } from 'src/app/interfaces/donut';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  getAll$(): Observable<IDonut[]> {
    return this._httpClient.get<IDonut[]>('http://localhost:3000/products');
  }

  getById$(id: number): Observable<IDonut> {
    return this._httpClient.get<IDonut>(`http://localhost:3000/products/${id}`);
  }
}
