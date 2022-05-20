import { API_URL } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  listCategory(): Observable<any>{
    return this.http.get(`${API_URL}/category/list-categories`, this.httpOptions)
  }

  listProductByCategory(idCategory: any): Observable<any>{
    return this.http.get(`${API_URL}/produits/list-produit/`+idCategory, this.httpOptions)
  }

  listproduit(): Observable<any>{
    return this.http.get(`${API_URL}/produits/list-produit`, this.httpOptions)
  }

  addProduit(produit: any): Observable<any>{
    return this.http.post<any>(`${API_URL}/produits/add-produit`, produit, this.httpOptions)
  }

  sellProduct(body: any): Observable<any>{
    return this.http.post<any>(`${API_URL}/produits/sell-product`,body, this.httpOptions)
  }

  listeVentes(): Observable<any>{
    return this.http.get(`${API_URL}/tickets/list-ventes`, this.httpOptions)
  }

}
