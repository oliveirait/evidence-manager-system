import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Modal } from 'bootstrap';

import { dados_sistemas, dados_status_pf } from '../../dados/dados_sistemas';
import { TesteService } from '../../service/teste.service';
import { SprintProps, StatusPropsReturn } from '../../interfaces/interface_sprint';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-sprints',
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './sprints.component.html',
  styleUrl: './sprints.component.css'
})
export class SprintsComponent implements OnInit, AfterViewInit {

  constructor (private api: TesteService) {}

  @ViewChild('modalElement') // Obtendo a referência do Modal
  modalElementRef!: ElementRef // Instandoando variável do tipo ElementRef
  private modalInstance!: Modal // Instanciando modal do Bootstrap

  list: any[] = []
  list1: any[] = []
  lista_sistemas: string[] = []
  lista_status_pf: string[] = []

  sistemaSelecionado = ''
  sprintSelecionada = ''
  pfSelecionado = ''
  validacaoSelecionada = ''
  acordoSelecionado = ''
  inicialSelecionado = ''
  finalSelecionado = ''
  statusEvidenciaSelecionado = ''
  obsSelecionada = ''

  ngAfterViewInit(): void {
    this.modalInstance = new Modal(this.modalElementRef.nativeElement)
  }

  abrirModal() {
    this.modalInstance.show()
  }

  fecharModal() {
    this.modalInstance.hide()
  }

  limparCamposModal() {
    this.sistemaSelecionado = ''
    this.sprintSelecionada = ''
    this.pfSelecionado = ''
    this.validacaoSelecionada = ''
    this.acordoSelecionado = ''
    this.inicialSelecionado = ''
    this.finalSelecionado = ''
    this.statusEvidenciaSelecionado = ''
    this.obsSelecionada = ''
  }

  getData () {
    this.api.getAll().subscribe({
      next: (resp) => {
        this.list = resp.retorno
      },
      error: (erro: StatusPropsReturn) => {
        alert(JSON.stringify(erro))
      }
    })
  }

  postData () {
    let dados = {
      sistema: this.sistemaSelecionado,
      sprint: String(this.sprintSelecionada),
      pf: String(this.pfSelecionado),
      validacao: this.validacaoSelecionada,
      dada_acordo: this.acordoSelecionado,
      obs: this.obsSelecionada,
      p_inicial: this.inicialSelecionado,
      p_final: this.finalSelecionado,
      status_evidencia: this.statusEvidenciaSelecionado
    }

    let estaVazio = [dados.sistema, dados.sprint, dados.validacao].includes('')

    if (estaVazio) {
      return alert(JSON.stringify('Os campos Sistema, Sprint e Validação não podem ficar vazios'))
    }
    
    this.api.postAll(dados).subscribe({
      next: () => {
        this.fecharModal()
        this.getData()
      },
      error: (erro: StatusPropsReturn) => {
        alert(JSON.stringify(erro))
      },
      complete: () => {
        this.limparCamposModal()
      }
    })
  }
  
  ngOnInit() {
    this.lista_sistemas = dados_sistemas
    this.lista_status_pf = dados_status_pf
    this.getData()
  }

}
