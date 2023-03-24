import { Component,  } from '@angular/core';
import { TodoService } from 'src/app/todo.service';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  selectedTasks: any[] = [];
 
  

  constructor(private todoService: TodoService) {
    // recuperer les task 
    const selectedTasksJson = localStorage.getItem('selectedTasks');
    this.selectedTasks = selectedTasksJson ? JSON.parse(selectedTasksJson) : [];
    console.log (this.selectedTasks);
    // trie les tâches par ordre décroissant de date
    this.selectedTasks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  
  removeHistory(task: any) {
    const index = this.selectedTasks.indexOf(task);
    if (index > -1) {
      this.selectedTasks.splice(index, 1);
    }
    localStorage.setItem('selectedTasks', JSON.stringify(this.selectedTasks));
  }
  
}
