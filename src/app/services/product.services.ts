import { Injectable, OnInit } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class ProductService{
  baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient){}


  addingProductCart( productDetails: any, clientId: string | null){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })

    return this.httpClient.post<any[]>(this.baseUrl + `product/${clientId}`, JSON.stringify(productDetails), {headers}).subscribe();
  }
}
