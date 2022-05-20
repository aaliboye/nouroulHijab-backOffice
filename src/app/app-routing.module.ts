import { ProduitComponent } from './home/produit/produit.component';
import { AddProduitComponent } from './home/add-produit/add-produit.component';
import { ListProduitsComponent } from './home/list-produits/list-produits.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVentesComponent } from './home/list-ventes/list-ventes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list-produits', component: ListProduitsComponent },
  { path: 'produit/:idProduit', component: ProduitComponent },
  { path: 'list-ventes', component: ListVentesComponent },
  { path: 'add-produit', component: AddProduitComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
