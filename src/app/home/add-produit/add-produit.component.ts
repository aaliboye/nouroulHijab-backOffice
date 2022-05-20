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
  alert: any
  image: any

  constructor(private produitService: ProduitService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllCategories()
    this.addFormProduit = this.fb.group({
      name: [''],
      description: [''],
      prixUnit: [''],
      prixGros: [''],
      stock: [''],
      categoryId: [''],
      image: ['']
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
      let produit = {
        name: this.addFormProduit.value.name,
        description: this.addFormProduit.value.description,
        prixUnit: this.addFormProduit.value.prixUnit,
        prixGros: this.addFormProduit.value.prixGros,
        stock: this.addFormProduit.value.stock,
        categoryId: this.addFormProduit.value.categoryId,
      }

      localStorage.setItem(this.addFormProduit.value.name, this.image)

      this.produitService.addProduit(produit).subscribe((res:any)=>{
        console.log(res);
          this.alert = res.message

      })

      this.addFormProduit.reset()
    }

  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.image = (<FileReader>event.target).result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
