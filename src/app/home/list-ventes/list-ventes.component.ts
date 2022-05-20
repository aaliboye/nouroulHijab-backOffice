import { ProduitService } from './../../services/produit.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-ventes',
  templateUrl: './list-ventes.component.html',
  styleUrls: ['./list-ventes.component.css']
})
export class ListVentesComponent implements OnInit {

  listVenteFormGroup!: FormGroup
  categorySelected: any
  categories: any
  produits: any
  ventes: any
  ventesName : any
  produitSelected: any

  constructor(private fb: FormBuilder, private produitService: ProduitService) { }

  ngOnInit(): void {
    // this.getListVentes()
    this.getAllCategories()
    this.listVenteFormGroup = this.fb.group({
      categoryId: [''],
      productName: ['']
    })
  }

  produitByCattegory(){
    if(!this.categorySelected){
      return
    }
    this.produitService.listProductByCategory(this.categorySelected).subscribe((res: any)=>{
      this.produits = res
      console.log(this.produits);
    })
  }

  getAllCategories(){
    this.produitService.listCategory().subscribe((res)=>{
      console.log(res);

        this.categories = res
    })
  }


  getListVentes(){
    this.produitService.listeVentes().subscribe((res)=>{
      this.ventes = res.reverse()
    })
  }

  getListVentesByName(){
    this.ventes = []
    this.produitService.listeVentes().subscribe((res: any)=>{
      console.log(res);
      console.log(this.produitSelected);
      res.forEach((vente: any) => {
        if(vente.productName == this.produitSelected){
          this.ventes.push(vente)
        }
      });

    })
  }

}
