import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ProductService{
  baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient){}

  addingProductCart( productDetails: any ){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })

    return this.httpClient.post<any[]>(this.baseUrl + "product/038a604d-0cb7-4cfc-8590-b77febc8d94b", JSON.stringify(productDetails), {headers}).subscribe();
  }
}
