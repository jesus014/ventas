import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import {Response} from '../models/response';
import { DialogClienteComponent } from './dialog/dialogcliente.component';
import{MatDialog} from '@angular/material/dialog';
import{FormsModule} from '@angular/forms'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public lst: any[];
  public columnas: string [] = ['id','nombre'];
  constructor(
    //declacacion de ApiclienteService para poder ocuparlo
    private apiCliente : ApiclienteService,
    public dialog : MatDialog

  ) {

  }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.apiCliente.getCliente().subscribe(response=>{ //se manda a llamar el metodo gecliente anteriormente decladrado en ApiCliente service, response es la informacion que trae
      this.lst =response.data;
    });
  }

  openAdd() { //se abre el metodo para agregar usuario
    const dialogRef = this.dialog.open(DialogClienteComponent,{ //uso de componentes
      width:'300'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientes();
    });
  }
}
