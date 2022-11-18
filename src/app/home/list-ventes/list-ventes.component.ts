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
  allVentes: any
  produit: any
  qteVendus: number = 0
  prixTotal: number = 0
  isproduitSelected = false
  ventesName : any
  produitSelected: any

  constructor(private fb: FormBuilder, private produitService: ProduitService) { }

  ngOnInit(): void {
    // this.getListVentes()
    this.getAllCategories()
    this.getListVentes()
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
      this.allVentes = res.reverse();
      console.log(this.allVentes);
    })
  }

  getListVentesByName(){
    this.qteVendus = 0;
    this.prixTotal = 0;
    this.ventes = []
    this.produitService.listeVentes().subscribe((res: any)=>{
      console.log(res);
      console.log(this.produitSelected);
      this.getOneProduit(this.produitSelected)
      this.isproduitSelected = true
      res.forEach((vente: any) => {
        if(vente.productName == this.produitSelected && vente.visible == true){
          this.ventes.push(vente)
          this.qteVendus += vente.quantite
          this.prixTotal += vente.prixTotal
        }
      });

    })
  }

  getOneProduit(name: any){
    this.produitService.listproduit().subscribe((res:any)=>{
      res.forEach((prod: any) => {
        if(prod.name == name){
          console.log(prod);

          this.produit = prod
        }
      });
    })
  }

  evaluer(){
    this.produitService.evaluation(this.produitSelected).subscribe((res)=>{
      console.log(res);

    })
  }

}
