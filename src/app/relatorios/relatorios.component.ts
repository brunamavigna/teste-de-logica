import { Component, ConstructorSansProvider, OnInit } from '@angular/core';
import { InterfaceModel } from '../home/model/interface-model';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

  valores: any;

  filtroAsus: any;
  qntAsus: any;

  filtroMac: any;
  qntMac: any;

  filtroDell: any;
  qntDell: any;

  filtroGamer: any;
  qntGamer: any;

  arrayCompleto: any;

  vendas: any;

  cursos: any;

  qtd: any;

 

  

  courses: InterfaceModel[] = [
    { _id: '1', name: 'Notebook Asus', descricion: 'com 6 numero de processamento,16 de ram, ultra fino', price: '3,99', id_estoque: '1' },
    { _id: '1', name: 'Notebook Asus', descricion: 'com 6 numero de processamento,16 de ram, ultra fino', price: '3,99', id_estoque: '1' },
    { _id: '1', name: 'Notebook Asus', descricion: 'com 6 numero de processamento,16 de ram, ultra fino', price: '3,99', id_estoque: '1' },
    { _id: '1', name: 'Notebook Asus', descricion: 'com 6 numero de processamento,16 de ram, ultra fino', price: '3,99', id_estoque: '1' },
    { _id: '2', name: 'MAC OS', descricion: 'com 8 numero de processamento, 16 de ram,ultra fino', price: '16.9', id_estoque: '2' },
    { _id: '3', name: 'Notebook Dell', descricion: 'com 4 numero de processamento, 8 de ram, ultra fino', price: '8,89', id_estoque: '3' },
    { _id: '4', name: 'PC Gamers', descricion: 'Este pc gamers dá a possibilidade de rodar jogos em ultra definição', price: '12,99', id_estoque: '4' }


  ];

  

  displayedColumns = ['name', 'qtdvendas'];


  constructor() { }

  ngOnInit(): void {
    
    //NOTEBOOK ASUS
    this.filtroAsus = this.courses.filter((valor: any) => valor.id_estoque == 1)
    this.qntAsus = this.filtroAsus.length
    //console.log('asus', this.qntAsus)


    //MAC
    this.filtroMac = this.courses.filter((valor: any) => valor.id_estoque == 2)
    this.qntMac = this.filtroMac.length
    //console.log(this.qntMac)

    //Dell
    this.filtroDell = this.courses.filter((valor: any) => valor.id_estoque == 3)
    this.qntDell = this.filtroDell.length
    //console.log('Dell', this.qntDell)

    //Gamer
    this.filtroGamer = this.courses.filter((valor: any) => valor.id_estoque == 4)
    this.qntGamer = this.filtroGamer.length
    //console.log('gamer', this.qntGamer)




    //todas as vendas
    this.vendas = [
      {
        quantidade: this.qntAsus
      },
      {

        quantidade: this.qntMac
      },
      {

        quantidade: this.qntDell
      },
      {

        quantidade: this.qntGamer
      }
    ]

    

      for(var i = 0; i < this.vendas.length; i++){
       if (this.vendas[i] === "qntAsus") this.qtd++;
    }
     
    console.log('teste',this.vendas.quantidade);
      



      

    //remove duplicidade    
    const semRepetidos = this.courses.filter((valor: any) => valor.id_estoque != 1)
    //console.log(semRepetidos)

    this.arrayCompleto = [this.filtroAsus[0], ...semRepetidos]
    //console.log(this.arrayCompleto)

  }




}
