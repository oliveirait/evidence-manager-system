import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'evidence-manager';
  tituloDescricao = 'Sistema de gestão de sprints do SEFIN'

  isCollapsed: boolean = false

  toggleMenu () {
    this.isCollapsed = !this.isCollapsed
  }

  headerMenu = [
    {name: 'Home', route: '', icon: 'home'},
    {name: 'Sistemas', route: '/sistemas', icon: 'apps'},
    {name: 'Sprints', route: '/sprints', icon: 'table'},
  ]
}
