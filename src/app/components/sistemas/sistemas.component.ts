import { Component } from '@angular/core';
import { Users } from '../../interfaces/users';
import { TesteService } from '../../service/teste.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sistemas',
  imports: [CommonModule],
  templateUrl: './sistemas.component.html',
  styleUrl: './sistemas.component.css'
})

export class SistemasComponent implements OnInit {
  
  constructor( private call: TesteService ) {}

  list: Users[] = []

  ngOnInit() {
    this.call.getAll().subscribe(
      (users: Users[]) => this.list = users
    ) 
  }

}
