import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  isActive: boolean = false;
  
  isUrgent: {id: number, task: string}[] = [];
  isOrdinary: {id: number, task: string}[] = [];
  nextId: number = 1;
  public showPage = false;

  constructor() { }

saveTask(task: string, isUrgent: boolean): void {
  if (isUrgent) {
    const newTask = {id: this.isUrgent.length + 1, task: task};
    this.isUrgent.push(newTask);
    // pour que id debute de 1
    this.isOrdinary.forEach((task, index) => {
      task.id = index + 1;
    });
  } else {
    const newTask = {id: this.isOrdinary.length + 1, task: task};
    this.isOrdinary.push(newTask);
    // pour que id debute de 1
    this.isUrgent.forEach((task, index) => {
      task.id = index + 1;
    });
    
  }
}
  // Cloner isUrgent et isOrdinary sur 2 lists 
  cloneLists(): {id: number, task: string}[][] {
    const urgentList = this.isUrgent.map(task => ({...task}));
    const ordinaryList = this.isOrdinary.map(task => ({...task}));
    localStorage.setItem('urgentList', JSON.stringify(urgentList));
    localStorage.setItem('ordinaryList', JSON.stringify(ordinaryList));
    return [urgentList, ordinaryList];
}
afficherTaches() {
  this.showPage = !this.showPage;
  console.log(this.showPage );
  return this.showPage;
}

}
  
  
  

