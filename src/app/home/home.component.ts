import { FormGroup, FormBuilder } from '@angular/forms';
import { ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: any
  idCategory: any
  vendreProduitForm!: FormGroup
  produits: any

  constructor(private produitService: ProduitService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.getAllCategories()
    this.getAllProducts()
    this.vendreProduitForm = this.fb.group({

    })
  }

  getAllCategories(){
    this.produitService.listCategory().subscribe((res)=>{
      console.log(res);
      this.categories = res
    })
  }

  getAllProducts(){
    this.produitService.listproduit().subscribe((res)=>{
      this.produits = res
    })
  }

}
