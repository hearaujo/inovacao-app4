import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Guia } from './guia.model';


@Injectable({
  providedIn: 'root'
})
export class GuiaService {

  private movimentacaoCollection: AngularFirestoreCollection<Guia>;

  constructor(protected db: AngularFirestore) {
      this.movimentacaoCollection = db.collection<Guia>('teste');//definindo o nome da coleção no Firebase
    }

    get timestamp() {
      return firebase.firestore.FieldValue.serverTimestamp();
    }

    //salvando no banco
    addGuia(guia: Guia) {
      return this.movimentacaoCollection.add({
        ...guia,
        createdAt: this.timestamp
      })
      .then(e => {
        this.updateUidGuia(e.id);
        return e.id})
      .catch(er => console.error('erro no slavar gestor', er));
    }

    //para adicionar o uid no documento (Opcional, somente para boas práticas)
    private updateUidGuia(uid: string){
      return this.movimentacaoCollection.doc(uid).update({"uid" : uid});
    }

    //get de um documento específico da coleção
    public getGuia(id: string): Observable<any> {
      return this.movimentacaoCollection.doc<any>(id).valueChanges();
    }

    //get de todos os documentos armazenados na colecao
    public getMovimentacoes() {
      return this.movimentacaoCollection.snapshotChanges(); // mantem atualizado em realtime
    }
  }

  