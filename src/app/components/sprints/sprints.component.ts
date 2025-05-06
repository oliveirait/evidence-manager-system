import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { dados_sprint, lista_colunas_sprint } from '../../dados/dados_sprint';


@Component({
  selector: 'app-sprints',
  imports: [CommonModule],
  templateUrl: './sprints.component.html',
  styleUrl: './sprints.component.css'
})
export class SprintsComponent implements OnInit {

  constructor() {}

  list: any[] = [];
  lista_colunas: any[] = []

  ngOnInit() {
    this.lista_colunas = lista_colunas_sprint
    this.list = dados_sprint
  }
}
