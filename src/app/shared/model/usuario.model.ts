export interface Usuario {
    uid?: string; // identificador único
    nome: string; // máximo 15 caractere
    email: string; // máximo 60 caracteres
    createdAt?: any;
    rules?:{
      administrador?:boolean
    }
 }