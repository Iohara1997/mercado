import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent implements OnInit {
  title = "Lista de compras";
  mercadorias = {
    descricao:"Arroz",
    quantidade:1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
