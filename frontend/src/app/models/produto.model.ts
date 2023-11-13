import { Categoria } from "./categoria.model";

export class Produto {
  id!: number;
  nome?: string;
  categoria_id!: number;
  valor?: number; 
  vencimento?: string;
  quantidade_estoque?: number;
  perecivel: boolean = false;
}
