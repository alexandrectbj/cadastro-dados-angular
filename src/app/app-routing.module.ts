import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'users',
    component: ListUsersComponent,
  },
  {
    path: 'users/:id',
    component: UserDataComponent,
    data:{
      id : ':id'
    }
  },
  {
    path: 'update/:id',
    component: RegisterComponent,
    data:{
      id: ':id',
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
