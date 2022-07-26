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
    { _id: '1', name: 'Notebook Asus', descricion: ' Com 6 numero de processamento, 16 de ram, ultra fino', price: '3,99', id_estoque: '454' },
    { _id: '2', name: 'MAC OS', descricion: ' Com 8 numero de processamento, 16 de ram, ultra fino', price: '16,9', id_estoque: '454' },
    { _id: '3', name: 'Notebook Dell', descricion: 'Com 4 numero de processamento, 8 de ram, ultra fino', price: '8,89', id_estoque: '454'  },
    { _id: '4', name: 'PC Gamers', descricion: 'Este pc gamers dá a possibilidade de rodar jogos em ultra definição', price: '12,99', id_estoque: '454'},
    



  ]

  displayedColumns = ['name', 'descricion', 'price', ];

  // coursesService: HomeService;

 
  
  


  constructor(){}

    
    // this.courses = [];

    // this.coursesService = new HomeService();
    // this.courses = this.coursesService.list();
  
    
  ngOnInit(): void {

  //   this.courses.forEach(e => {

  //     let teste = Number(e.id_estoque);
  //     console.log(teste)

  //   })

  

   }

   
   
  
}