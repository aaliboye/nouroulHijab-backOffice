import { TokenInterceptor } from './providers/token.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SidemenuComponent } from './home/sidemenu/sidemenu.component';
import { LoginComponent } from './login/login.component';
import { ListProduitsComponent } from './home/list-produits/list-produits.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProduitComponent } from './home/add-produit/add-produit.component';
import { ProduitComponent } from './home/produit/produit.component';
import { ListVentesComponent } from './home/list-ventes/list-ventes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidemenuComponent,
    LoginComponent,
    ListProduitsComponent,
    AddProduitComponent,
    ProduitComponent,
    ListVentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
