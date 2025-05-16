import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dados_sistemas2 } from '../../dados/dados_sistemas';


@Component({
  selector: 'app-sistemas',
  imports: [CommonModule],
  templateUrl: './sistemas.component.html',
  styleUrl: './sistemas.component.css'
})

export class SistemasComponent implements OnInit {
  
  constructor() {}

  list: any[] = [];

  ngOnInit() {
    this.list = dados_sistemas2
  }

}
