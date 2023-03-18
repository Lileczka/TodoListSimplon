import { Component } from '@angular/core';
import { ITodo, ITODOS } from 'src/app/todo.mock';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
todos: ITodo[] = ITODOS;
}
