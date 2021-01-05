import { User } from './user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:BehaviorSubject<User> = new BehaviorSubject(undefined);
  constructor() { }

  login(username:string, password:string){
    if(username && password){
      this.user.next(new User(username, password));
    }
  }
  logout(){
    this.user.next(undefined);
  }
  getUser(): Observable<User>{
    return this.user;
  }
}
