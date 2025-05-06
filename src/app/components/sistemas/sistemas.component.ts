import { Component } from '@angular/core';
import { Interface_Users } from '../../interfaces/interface_users';
import { TesteService } from '../../service/teste.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dados_sistemas } from '../../dados/dados_sistemas';
import { Interface_Sistemas } from '../../interfaces/interface_sistemas';


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
    this.list = dados_sistemas
  }

}
