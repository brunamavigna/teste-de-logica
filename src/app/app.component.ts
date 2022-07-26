import { Component,  OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'projeto-frontend';

  
  estoque: any

  constructor(
    private api : ApiServiceService
  ){}

  ngOnInit(): void {
      this.loadData();

  }

  loadData(){
    this.api.loadData().subscribe(produtos => this.estoque = produtos)

  }

}
