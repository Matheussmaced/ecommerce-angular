import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UserService{
  baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient){}

  loginUser(email: string, password: string){
    return this.httpClient.get<any[]>(this.baseUrl + "users/all").pipe(
      map((res:any[]) => {
        if(!res || res.length === 0){
          return null;
        }

        const user = res.find(user => user.email === email && user.password === password);

        if(!user){
          return null
        }

        return console.log(user.name)
      })
    )
  }

  registerUser(name:string, email: string, password: string, cpf: string, cep: string){
    const body = {
      name:name,
      email:email,
      password:password,
      cpf:cpf,
      cep:cep
    }

    return this.httpClient.post<any[]>(this.baseUrl + "users", body).subscribe(
      (res) => {
        alert(`Usuario ${name} registrado com sucesso!`)
        console.log(res)
      },
      (err) => {
        alert(`Usuario ${name} não foi registrado!`)
      }
    )
  }
}
