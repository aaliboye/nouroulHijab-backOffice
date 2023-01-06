import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {


  : any
  produits: any =[]
  defaultImage = "../../../assets/img/hijab.jpg"

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
    console.log(idcategory);
    this.produits = []
    this.produitService.listProductByCategory(idcategory).subscribe((res: any)=>{
      res.forEach((prod: any) => {
        if(localStorage.getItem(prod.name)){
          prod.image = localStorage.getItem(prod.name)
          console.log(prod.image);

        }
        else{
          prod.image = this.defaultImage
        }
        this.produits.push(prod)
      });
      console.log(this.produits);

    })
  }

}
