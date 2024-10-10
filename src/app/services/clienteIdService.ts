import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ClientIdService {
  private clientIdSubject = new BehaviorSubject<string | null>(null);
  clientId$ = this.clientIdSubject.asObservable();

  setClientId(clientId: string | null) {
    this.clientIdSubject.next(clientId);
  }
}
