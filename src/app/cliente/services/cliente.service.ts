import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { ClienteViewModel } from '../models/cliente-view-model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private db: AngularFirestore) { }

  private clienteColection = 'clientes';

  getClientes(): Observable<firebase.firestore.QuerySnapshot> {
    // Cliente igual a tabela do banco de dados
    // Ordenar por nome
    return this.db.collection<Cliente>(this.clienteColection, ref => ref.orderBy('nome', 'asc')).get();
  }

  // Gravar
  salvarClientes(cliente: Cliente): Promise<DocumentReference> {
    return this.db.collection(this.clienteColection).add(cliente);
  }

  // Edicão usar void
  editarClientes(cliente: ClienteViewModel): Promise<void> {
    // Do tipo doc, espera o campo ID
    // Update atualizar
    return this.db.collection(this.clienteColection).doc(cliente.id).update(cliente);
  }

  // Edicao de forma parcial
  editarClientesParcial(id: string, obj: object): Promise<void> {
    // Do tipo doc, espera o campo ID
    // Update atualizar
    return this.db.collection(this.clienteColection).doc(id).update(obj);
  }

  // Edicão usar void
  deletarClientes(id: string): Promise<void> {
    // Do tipo doc, espera o campo ID
    // Update atualizar
    return this.db.collection(this.clienteColection).doc(id).delete();
  }
}
