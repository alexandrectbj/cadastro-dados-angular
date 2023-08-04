import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Cadastro de dados';

  status?: any;
  constructor(private route: Router, private dados: ActivatedRoute) {}

  ngOnInit() {
   
  }

  close(){
    const close = this.getElement('status');
    close[0].classList.toggle('hide');
  }

  getElement(element: string) {
    return <HTMLScriptElement[]>(<any>document.getElementsByClassName(element));
}
}
