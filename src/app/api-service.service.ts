import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private url = 'http://localhost:3031/products'

  constructor(private http:HttpClient) { }

  loadData(){
    return this.http.get<any>(`${this.url}`) 
    .pipe(
       tap(produtos => console.log(produtos))
    )
  }
}
