import { Component, OnInit } from '@angular/core';
import { InterfaceModel } from './model/interface-model';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courses: InterfaceModel[] = [
    {_id: '1', name: 'Angular', category: 'Front-end'},
    {_id: '2', name: 'C', category: 'Back-end'},
    {_id: '3', name: 'c#', category: 'Back-end'},
    {_id: '4', name: 'Java', category: 'Back-end'},
    {_id: '5', name: 'Node.js', category: 'Back-end'},
    {_id: '6', name: 'React', category: 'Front-end'},
    {_id: '7', name: 'Vue', category: 'Front-end'},
    {_id: '8', name: 'JavaScript', category: 'Front-end'},
    {_id: '9', name: 'Typescript', category: 'Front-end'},
    {_id: '10', name: 'Html e Css', category: 'Front-end'},
    {_id: '11', name: 'Python', category: 'Back-end'},
    {_id: '12', name: 'Flutter', category: 'Front-end'},
    {_id: '13', name: 'Ionic', category: 'Front-end'},
    {_id: '14', name: 'SQL', category: 'Banco'},
    {_id: '15', name: 'Mongo DB', category: 'Banco'},
    


   
  ]
    
  displayedColumns = ['name', 'category'];

  coursesService:   HomeService;

  constructor() {
    // this.courses = [];

    this.coursesService = new HomeService();
    // this.courses = this.coursesService.list();
   }

  ngOnInit(): void {
  }

}
