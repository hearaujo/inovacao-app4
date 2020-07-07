import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Enel } from './enel.model';


@Injectable({
  providedIn: 'root'
})
export class EnelService {

  private movimentacaoCollection: AngularFirestoreCollection<Enel>;

  constructor(protected db: AngularFirestore) {
      this.movimentacaoCollection = db.collection<Enel>('teste');//definindo o nome da coleção no Firebase
    }

    get timestamp() {
      return firebase.firestore.FieldValue.serverTimestamp();
    }

    //salvando no banco
    addEnel(enel: Enel) {
      return this.movimentacaoCollection.add({
        ...enel,
        createdAt: this.timestamp
      })
      .then(e => {
        this.updateUidEnel(e.id);
        return e.id})
      .catch(er => console.error('erro no slavar gestor', er));
    }

    //para adicionar o uid no documento (Opcional, somente para boas práticas)
    private updateUidEnel(uid: string){
      return this.movimentacaoCollection.doc(uid).update({"uid" : uid});
    }

    //get de um documento específico da coleção
    public getEnel(id: string): Observable<any> {
      return this.movimentacaoCollection.doc<any>(id).valueChanges();
    }

    //get de todos os documentos armazenados na colecao
    public getMovimentacoes() {
      return this.movimentacaoCollection.snapshotChanges(); // mantem atualizado em realtime
    }
  }

  