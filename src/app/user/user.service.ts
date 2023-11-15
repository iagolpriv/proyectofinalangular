import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://fakestoreapi.com/users';
  private loggedInUser = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  validateUser(username: string, password: string): Observable<boolean> {
    return this.http
      .get<User[]>(this.apiUrl)
      .pipe(
        map((users) => {
          const user = users.find(
            (user) => user.username === username && user.password === password
          );
          this.setLoggedInUser(user);
          return Boolean(user);
        })
      );
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  setLoggedInUser(user: any) {
    this.loggedInUser.next(user);
  }

  getLoggedInUser() {
    return this.loggedInUser.asObservable();
  }
}