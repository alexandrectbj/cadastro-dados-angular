import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { IUser } from '../model/IUser.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private urlApi: string = 'http://localhost:3000/api/users';
  dados: any;

  constructor(private http: HttpClient) {}

  //criando get que retorna todos os dados do banco de dados

  getAll() {
    return this.http.get<IUser[]>(this.urlApi + '/').pipe(tap());
  }

  getById(id: any) {
    return this.http.get<IUser>(this.urlApi + '/' + id).pipe(tap());
  }

  register(user: IUser) {
    return this.http.post<IUser>(this.urlApi + '/', user).pipe(tap());
  }

  update(user: IUser){
    return this.http.put<IUser>(this.urlApi + "/", user).pipe(tap());
  }

  delete(id: any){
    return this.http.delete<IUser>(this.urlApi + "/" + id).pipe(tap());
  }
}
