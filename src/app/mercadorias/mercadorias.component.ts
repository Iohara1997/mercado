import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent implements OnInit {
  title = "Lista de compras";
  mercadorias = [
    {
        id:1,
    	descricao:"Arroz",
    	quantidadeEstoque:1,
      quantidadeMinima:2
    },
    {
        id:2,
      descricao:"Feijão",
      quantidadeEstoque:5,
      quantidadeMinima:3
    },
    {
        id:3,
      descricao:"Óleo",
      quantidadeEstoque:2,
      quantidadeMinima:2
    }
  ]

  novaMercadoria = {
    id:4,
    descricao: "Sal",
    quantidadeEstoque: 2,
    quantidadeMinima:1
  }

  adicionarMercadoria(){
  this.mercadorias.push({
    id:this.novaMercadoria.id,
    descricao:this.novaMercadoria.descricao,
    quantidadeEstoque:this.novaMercadoria.quantidadeEstoque,
    quantidadeMinima:this.novaMercadoria.quantidadeMinima
  })
  }
  constructor() { }

  ngOnInit() {
  }

}
