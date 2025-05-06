import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  headerMenu = [
    {name: 'Home', route: ''},
    {name: 'Sistemas', route: '/sistemas'},
    {name: 'Sprints', route: '/sprints'},
  ]
}

