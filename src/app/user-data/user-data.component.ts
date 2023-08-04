import { Component, OnInit } from '@angular/core';
import { IUser } from '../model/IUser.model';
import { UsersService } from '../services/users.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  user?: IUser;
  status?: string;
  //delete button
  deleteOverlay = this.getElement("overlay");

  //passar dados da rota é necessário declarar activated route
  constructor(
    private userService: UsersService,
    private route: Router,
    private dados: ActivatedRoute,

  ) {}

  ngOnInit() {
    this.getUser();
  }


  //retorna o id da rota
  getId() {
    return this.dados.snapshot.params['id'];
  }

  async getUser() {
    this.userService.getById(this.getId()).subscribe({
      next: (res: any) => {
        this.user = res;
        console.log(res);
      },
      error: (error: any) => {
        console.log(error);
      },
    });

  }

  popUp(){
    this.deleteOverlay[0].classList.toggle("show");
  }

  async deleteUser(id: any){
    this.userService.delete(id).subscribe({
      next: (res: any) => {
        this.status = res;
        console.log(res);
        this.route.navigateByUrl('/');
      },
      error: (erro: any) => {
        console.log(erro);
      }
    });
  }

  getElement(element: string) {
      return <HTMLScriptElement[]>(<any>document.getElementsByClassName(element));
  }


  

  
}
