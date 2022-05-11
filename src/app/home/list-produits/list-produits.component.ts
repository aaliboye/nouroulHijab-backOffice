import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

  categories: any
  produits: any

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
    this.produitService.listCategory().subscribe((res)=>{
      this.categories = res
    })
  }

  produitByCattegory(idcategory : any){
    this.produitService.listProductByCategory(idcategory).subscribe((res)=>{
      this.produits = res
      console.log(this.produits);

    })
  }

}
