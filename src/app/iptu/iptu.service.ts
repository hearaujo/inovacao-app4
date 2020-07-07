import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Iptu } from './iptu.model';


@Injectable({
  providedIn: 'root'
})
export class IptuService {

  private movimentacaoCollection: AngularFirestoreCollection<Iptu>;

  constructor(protected db: AngularFirestore) {
      this.movimentacaoCollection = db.collection<Iptu>('teste');//definindo o nome da coleção no Firebase
    }

    get timestamp() {
      return firebase.firestore.FieldValue.serverTimestamp();
    }

    //salvando no banco
    addIptu(iptu: Iptu) {
      return this.movimentacaoCollection.add({
        ...iptu,
        createdAt: this.timestamp
      })
      .then(e => {
        this.updateUidIptu(e.id);
        return e.id})
      .catch(er => console.error('erro no slavar gestor', er));
    }

    //para adicionar o uid no documento (Opcional, somente para boas práticas)
    private updateUidIptu(uid: string){
      return this.movimentacaoCollection.doc(uid).update({"uid" : uid});
    }

    //get de um documento específico da coleção
    public getIptu(id: string): Observable<any> {
      return this.movimentacaoCollection.doc<any>(id).valueChanges();
    }

    //get de todos os documentos armazenados na colecao
    public getMovimentacoes() {
      return this.movimentacaoCollection.snapshotChanges(); // mantem atualizado em realtime
    }
  }

  