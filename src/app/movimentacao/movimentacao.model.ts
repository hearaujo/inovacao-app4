export interface Movimentacao {
  uid?: any; // código gerado pelo Firebase
  campos: {
    data?: any;
    identificacao?: string;
    qtdPessoas?: string;
    obs?: string;
  };
  createdAt?: any; //data da criação
 }
