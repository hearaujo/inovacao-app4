import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Movimentacao } from './movimentacao.model';


@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  private movimentacaoCollection: AngularFirestoreCollection<Movimentacao>;

  constructor(protected db: AngularFirestore) {
      this.movimentacaoCollection = db.collection<Movimentacao>('movimentacao');//definindo o nome da coleção no Firebase
    }

    get timestamp() {
      return firebase.firestore.FieldValue.serverTimestamp();
    }

    //salvando no banco
    addMovimentacao(movimentacao: Movimentacao) {
      return this.movimentacaoCollection.add({
        ...movimentacao,
        createdAt: this.timestamp
      })
      .then(e => {
        this.updateUidMovimentacao(e.id);
        return e.id})
      .catch(er => console.error('erro no slavar gestor', er));
    }

    //para adicionar o uid no documento (Opcional, somente para boas práticas)
    private updateUidMovimentacao(uid: string){
      return this.movimentacaoCollection.doc(uid).update({"uid" : uid});
    }

    //get de um documento específico da coleção
    public getMovimentacao(id: string): Observable<any> {
      return this.movimentacaoCollection.doc<any>(id).valueChanges();
    }

    //get de todos os documentos armazenados na colecao
    public getMovimentacoes() {
      return this.movimentacaoCollection.snapshotChanges(); // mantem atualizado em realtime
    }
  }

  