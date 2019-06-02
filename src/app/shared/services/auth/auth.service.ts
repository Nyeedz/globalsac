import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import LoginDTO from '../../dtos/login.dto';
import Login from '../../interfaces/login';
import User from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = new BehaviorSubject<boolean>(null);
  private $user: Subject<Object> = new ReplaySubject<Object>();
  private $userSubject: Subject<Object> = new BehaviorSubject<Object>(null);
  private _user: User;
  private _token: string;
  private _storage: any = localStorage;

  constructor(private http: HttpClient) {
    this.load();
    this.isLoggedIn.next(this.authenticated)
  }

  async login(body: LoginDTO): Promise<User> {
    return new Promise(async (resolve, reject) => {
      const url = environment.url + 'auth/local';
      try {
        const res = await this.http.post<Login>(url, body).toPromise();
        this.token = res.jwt;
        this.isLoggedIn.next(true);
        resolve(res.user);
      } catch (exception) {
        this.isLoggedIn.next(false);
        reject(exception);
      }
    });
  }

  logout() {
    this.token = '';
    this._storage.removeItem('token');
    this._storage.removeItem('refresh_token');
    this.isLoggedIn.next(false);
    this.$userSubject.next(null);
  }

  async load() {
    const token = await this._storage.getItem('token');

    if (!token) {
      this.isLoggedIn.next(false);
      this._storage.removeItem('token');
      this.logout();
      return null;
    }

    this.token = token;
    this.loadUser();
  }

  async loadUser() {
    try {
      const url = environment.url + 'users/me';
      const res = await this.http
        .get<User>(url, { headers: this.authHeaders })
        .toPromise();

      this._user = res;
      this.$user.next(this._user);
      this.$userSubject.next(this._user);
      this.isLoggedIn.next(true);
      return this._user;
    } catch (exception) {
      this.isLoggedIn.next(false);
      this.$user.next(null);
      this.logout();
    }
  }

  get authenticated(): boolean {
    return !(
      this._storage.getItem('token') == null ||
      this._storage.getItem('token') == ''
    );
  }

  get user(): Observable<any> {
    return this.$user.asObservable();
  }

  get token(): string {
    return this._token;
  }

  set token(token: string) {
    this._storage.setItem('token', token);
    this._token = token;
  }

  get authHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `bearer ${this.token}`
    });
  }
}
