import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Nf } from './nf.model';


@Injectable({
  providedIn: 'root'
})
export class NfService {

  private movimentacaoCollection: AngularFirestoreCollection<Nf>;

  constructor(protected db: AngularFirestore) {
      this.movimentacaoCollection = db.collection<Nf>('teste');//definindo o nome da coleção no Firebase
    }

    get timestamp() {
      return firebase.firestore.FieldValue.serverTimestamp();
    }

    //salvando no banco
    addNf(nf: Nf) {
      return this.movimentacaoCollection.add({
        ...nf,
        createdAt: this.timestamp
      })
      .then(e => {
        this.updateUidNf(e.id);
        return e.id})
      .catch(er => console.error('erro no slavar gestor', er));
    }

    //para adicionar o uid no documento (Opcional, somente para boas práticas)
    private updateUidNf(uid: string){
      return this.movimentacaoCollection.doc(uid).update({"uid" : uid});
    }

    //get de um documento específico da coleção
    public getNf(id: string): Observable<any> {
      return this.movimentacaoCollection.doc<any>(id).valueChanges();
    }

    //get de todos os documentos armazenados na colecao
    public getMovimentacoes() {
      return this.movimentacaoCollection.snapshotChanges(); // mantem atualizado em realtime
    }
  }

  