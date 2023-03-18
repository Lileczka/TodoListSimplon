import { Component} from '@angular/core';
import { ITodo, ITODOS } from 'src/app/todo.mock';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
todos: ITodo[] = ITODOS;
activeTodo: ITodo | null = null;

newTask!: string;

constructor() {
  // Désactive tous les éléments
  this.todos.forEach(todo => todo.isActive = false);
}

btnActive(todo: ITodo) {
  if (this.activeTodo === todo) {
    todo.isActive = false;
    this.activeTodo = null;
  } else {
    this.todos.forEach(t => t.isActive = false);
    todo.isActive = true;
    this.activeTodo = todo;
  }
}

}
  


