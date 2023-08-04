import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IUser } from '../model/IUser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent {
  users?: IUser[];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.getList();
  }

  async getList(){
    this.userService.getAll().subscribe({
      next: (res: any) => {
        this.users = res;
        console.log(this.users);
      },
    });
  }
}
