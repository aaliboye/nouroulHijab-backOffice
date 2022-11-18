import { Router } from '@angular/router';
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
  tickets:any
  categorySelected: any
  categoryName: any
  success: any
  error: any

  constructor(private produitService: ProduitService, private fb: FormBuilder, private route: Router) { }


  ngOnInit(): void {
    this.getAllCategories()
    // this.getAllProducts()
    // this.produitByCattegory()
    this.getListVentesToday()
    this.vendreProduitForm = this.fb.group({
      productName: [''],
      quantite: [''],
      type: [''],
      categoryId:['']
    })
  }

  vendre(){
    console.log(this.vendreProduitForm.value);
    if(!this.vendreProduitForm.valid){
      return
    }
    else{
      let ticket = {
        categoryId: this.vendreProduitForm.value.categoryId,
        productName: this.vendreProduitForm.value.productName,
        quantite: this.vendreProduitForm.value.quantite,
        type: this.vendreProduitForm.value.type
      }
      this.produitService.sellProduct(ticket).subscribe((res:any)=>{
        console.log(res)

        if(res.success){
          this.success = res.message
          setTimeout(() => {
            this.success = ''
          }, 5000);

          this.ionViewDidEnter()

        }

        else{
          this.error = res.message
          setTimeout(() => {
            this.error = ''
          }, 5000);
        }



      })
      this.vendreProduitForm.reset()

    }


  }


  ionViewDidEnter(){
    this.getAllCategories()
    // this.getAllProducts()
    this.produitByCattegory()
    this.getListVentesToday()
  }



  getAllCategories(){
    this.produitService.listCategory().subscribe((res)=>{
      console.log(res);
      this.categories = res
    })
  }

  // getAllProducts(){
  //   this.produitService.listproduit().subscribe((res)=>{
  //     this.produits = res
  //   })
  // }

  produitByCattegory(){
    if(!this.categorySelected){
      return
    }
    this.produitService.listProductByCategory(this.categorySelected).subscribe((res: any)=>{
      this.produits = res
      console.log(this.produits);
    })
  }

  getListVentesToday(){
    this.produitService.listeVenteToday().subscribe((res)=>{
      this.tickets = res
    })
  }

}
