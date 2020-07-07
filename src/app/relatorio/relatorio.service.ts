import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Relatorio } from './relatorio.model';


@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  private relatorioCollection: AngularFirestoreCollection<Relatorio>;

  constructor(protected db: AngularFirestore) {
      this.relatorioCollection = db.collection<Relatorio>('teste');//definindo o nome da coleção no Firebase
    }

    get timestamp() {
      return firebase.firestore.FieldValue.serverTimestamp();
    }

  
    //get de um documento específico da coleção
    public getRelatorio(id: string): Observable<any> {
      return this.relatorioCollection.doc<any>(id).valueChanges();
    }

    //get de todos os documentos armazenados na colecao
    public getMovimentacoes() {
      return this.relatorioCollection.snapshotChanges(); // mantem atualizado em realtime
    }
  }

  