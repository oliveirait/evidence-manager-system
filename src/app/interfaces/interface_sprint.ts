

export interface StatusPropsReturn {
  status: number,
  descricao: string,
  retorno: SprintProps[],
  erro: string
}


export interface SprintProps {
  id: string
  sistema: string
  sprint: string
  pf: string
  validacao: string
  dada_acordo: string
  obs: string
  p_inicial: string
  p_final: string
  status_evidencia: string
  created_at: string
  updated_at: string
}
