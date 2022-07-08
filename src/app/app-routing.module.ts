import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';

const routes: Routes = [
  {path: '', component: ProdutosComponent, pathMatch: 'full',},
  {path: 'cursos', component: HomeComponent},
  {path: 'maisvendidos', component: RelatoriosComponent},
  {path: '**', component: ProdutosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
