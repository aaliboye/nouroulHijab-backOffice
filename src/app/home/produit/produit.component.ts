import { ProduitService } from './../../services/produit.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  idProduit: any
  produit: any
  constructor(private actRoute: ActivatedRoute, private produitService: ProduitService) {
    this.idProduit = actRoute.snapshot.paramMap.get('idProduit')
   }

  ngOnInit(): void {
    this.getOneProduct()
  }

  getOneProduct(){
    this.produitService.listproduit().subscribe((res: any)=>{
      res.forEach((prod: any) => {
        if(prod._id = this.idProduit){
          this.produit =prod
        }
      });
    })
  }

}
