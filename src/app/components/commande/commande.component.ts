import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';
import {MatDialog} from '@angular/material/dialog';
import { MyInterface } from 'src/app/models/my-interface';



@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

myArray:any = [];
myCommande :any={
      id: "",
      name: "",
      poids: "",
      prix: ""
}

orderHeader:string = '';
isDescOrder:boolean = true;
searchInput:any = {
            id:null,
            name:"",
            poids:"",
            prix:""
}


  constructor(private myVar:CommandeService, private rout :Router, public dialog:MatDialog) { }
  

  ngOnInit(): void {
    this.getCommande();
  }

  sort(headerName:string){
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
  }

 /*  openDialog(){
    this.dialog.open(DialogBoxComponent,{
      width:'100%',
      data:"right click"

    })
  }

  addDialog(){
    this.dialog.open(AjouterComponent,{
      width:'100%',
      data:"right click"

    })
  } */


   //Method Post

  postCommande(){
    this.myVar.addCommande(this.myCommande)
    .subscribe( (item=>{
      this.myArray = [item, ...this.myArray];
      this.vidInput()
    }))
  }


// Pour Vider L'input

  vidInput(){
    this.myCommande= {
      id: "",
      name: "",
      poids: "",
      prix: ""
    }
  }
  

  //Method Get
  getCommande(){
  this.myVar.getAll()
  .subscribe(data => {
    this.myArray = data;
  })
  }

  //Method Delete
  deleteCommande(id: any){
    this.myVar.Delete(id)
    .subscribe(() => {
      this.myArray = this.myArray.filter
      ((item: { id: any; }) => item.id != id);

    })
  }

  


   //Pour Modifier 
  EeitCommande(item: any){
    this.myCommande = item;
    }

    updatMyCommande(){
      this.myVar.updatCommande(this.myCommande)
      .subscribe(com => {
        
      })
      this.vidInput();
      }
    }


  
