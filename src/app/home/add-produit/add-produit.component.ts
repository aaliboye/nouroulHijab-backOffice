import { FormGroup, FormBuilder } from '@angular/forms';
import { ProduitService } from './../../services/produit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  categories: any = []

  addFormProduit!: FormGroup

  constructor(private produitService: ProduitService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllCategories()
    this.addFormProduit = this.fb.group({
      name: [''],
      description: [''],
      prixUnit: [''],
      prixGros: [''],
      stock: [''],
      categoryName: ['']
    })
  }

  getAllCategories(){
    this.produitService.listCategory().subscribe((categories)=>{
      this.categories = categories
    })
  }

  addProduct(){
    console.log(this.addFormProduit.value);

    if(!this.addFormProduit.valid){
      return
    }
    else{
      this.produitService.addProduit(this.addFormProduit.value).subscribe((res)=>{
        console.log(res);

      })

      this.addFormProduit.reset()
    }

  }

}
