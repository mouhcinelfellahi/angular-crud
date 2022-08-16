import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { MyInterface } from '../models/my-interface';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  urlApi = 'http://localhost:42400/commandes';


  constructor( private http:HttpClient) { }


  //Method Get
getAll() {
  return this.http.get<MyInterface>(this.urlApi);
}

//Method Delete

Delete(id: any) {
  return this.http.delete(`${this.urlApi}/${id}`);
}

//Method Post
addCommande(commandes: any){
  return this.http.post<MyInterface>(this.urlApi,commandes)
}

//Method Updat

updatCommande(commandes:any){
  return this.http.put(`${this.urlApi}/${commandes.id}`,commandes);
}

}
