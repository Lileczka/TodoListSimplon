import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page1home',
  templateUrl: './page1home.component.html',
  styleUrls: ['./page1home.component.css']
})
export class Page1homeComponent implements OnInit {
  label= "Créer une tache";
  newTask: string = '';
  showPage = false;
  // Déclarer les variables pour stocker la liste d'éléments urgents
  urgentList: any[]; 
  ordinaryList: any[];
  selectedTask: string = '';
  constructor(private router: Router,
    private route: ActivatedRoute) {
      // Récupérer la liste des éléments urgents du localStorage
      this.urgentList = JSON.parse(localStorage.getItem('urgentList') || '[]');
      this.ordinaryList = JSON.parse(localStorage.getItem('ordinaryList') || '[]');
  }
ngOnInit(): void {
  //afficher la pertie caché de ng-container
  this.route.queryParams.subscribe(params => {
    this.showPage = params['showPage'] === 'true';
  });
}
//passer la valeur de showPage à true
afficherSelectedTask() {
  this.showPage = !this.showPage;
  localStorage.setItem('showPage', JSON.stringify(this.showPage));
}
goToPage2() {
  this.router.navigate(['/page2']);
  }
goToPage3() {
    
    this.router.navigate(['/page3']); 
  }
  
  removeTask(selectedTask: any, listType: string) {
    // Remove the selected task from the urgent or ordinary list
    if (listType === 'urgentList') {
      this.urgentList = this.urgentList.filter(task => task !== selectedTask);
      localStorage.setItem('urgentList', JSON.stringify(this.urgentList));
    } else {
      this.ordinaryList = this.ordinaryList.filter(task => task !== selectedTask);
      localStorage.setItem('ordinaryList', JSON.stringify(this.ordinaryList));
    }
  
    // ajouter cliqué task au local storage 
    const selectedTasksJson = localStorage.getItem('selectedTasks');
    const selectedTasks = selectedTasksJson ? JSON.parse(selectedTasksJson) : [];
    selectedTasks.push(selectedTask);
    localStorage.setItem('selectedTasks', JSON.stringify(selectedTasks));
  
    // Navigate to page 3
    this.router.navigate(['/page3']);
  }
  
  
}

  

