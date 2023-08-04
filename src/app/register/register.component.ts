import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IUser } from '../model/IUser.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user_edit?: IUser;
  update: boolean = false;
 
  constructor(private userService: UsersService, private route: Router, private data: ActivatedRoute) {}

  ngOnInit(): void {
    if(this.getId()){
      this.getUser();
      this.update = true;
      this.hideInputSexo();
      this.hideButton();
      const sexo = this.getElement('sexo');
      sexo[0].classList.toggle('show');
      this.hideInputSenha();
    }
  }

  //função para remover campos input sexo e senha quando update
  hideInputSexo(){
      const sexoInput = this.getElement("input_radio");
      sexoInput[0].remove();
  }

  hideInputSenha(){
    const inputSenha = this.getElement("senha");
      inputSenha[0].remove();
  }

  //ocultar botão cadastra e mostrar botão atualizar
  hideButton(){
    //esconder botão cadastrar quando update
    const register_button = this.getElement('register_button');
    register_button[0].remove();
    //mostrar botão atualizar
    const update_button = this.getElement("update_button");
    update_button[0].classList.toggle('show');
  }


  enviar(form: NgForm) {
    let user = form.value;
    if(this.update){
      this.updateUser(user);
    } else {
      this.registerUser(user);
    }
    console.log(form.value);
    
  }

  async registerUser(user: IUser){
    this.userService.register(user).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (erro: any) => {
        console.log(erro);
      },
    });
  }

  async updateUser(user: IUser){
    this.userService.update(user).subscribe({
      next: (res: any) => {
        console.log(res);
        this.route.navigateByUrl("/");
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  getId(){
    return this.data.snapshot.params['id'];
  }

  
  async getUser() {
    this.userService.getById(this.getId()).subscribe({
      next: (res: any) => {
        this.user_edit = res;
        console.log(res);
      },
      error: (error: any) => {
        console.log(error);
      },
    });

  }


  getElement(element: string) {
    return <HTMLScriptElement[]>(<any>document.getElementsByClassName(element));
}
}
