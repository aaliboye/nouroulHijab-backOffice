import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SidemenuComponent } from './home/sidemenu/sidemenu.component';
import { LoginComponent } from './login/login.component';
import { ListProduitsComponent } from './home/list-produits/list-produits.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProduitComponent } from './home/add-produit/add-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidemenuComponent,
    LoginComponent,
    ListProduitsComponent,
    AddProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
