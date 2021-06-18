import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import { Response } from '../models/response';
import { DialogClienteComponent } from './dialog/dialogcliente.component';
import { Cliente } from '../models/cliente';
import { DialogdeleteComponent } from '../common/delete/dialogdelete/dialogdelete.component';
import{MatDialog} from '@angular/material/dialog';
import{FormsModule} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public lst: any[];
  public columnas: string [] = ['id','nombre','actions'];
  readonly width: string ='300 px';

  constructor(
    //declacacion de ApiclienteService para poder ocuparlo
    private apiCliente : ApiclienteService,
    public dialog : MatDialog,
    public snakBar: MatSnackBar,

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
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientes();
    });
  }

  //metodo de editar cliente.

  openEdit(cliente: Cliente) {
    const dialogRef = this.dialog.open(DialogClienteComponent,{ //uso de componentes
      width: this.width,
      data: cliente
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientes();
    });
  }


  //creacion del metodo para eliminar a un componente.
  openDelete(cliente: Cliente){
    const dialogRef = this.dialog.open(DialogdeleteComponent,{ //uso de componentes
      width: this.width

    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.apiCliente.delete(cliente.id).subscribe(Response =>{
          if(Response.exito === 1){
            this.snakBar.open('cliente eliminado con exito','',{duration: 2000});
            this.getClientes();
          }
        });
      }
    });

  }
}
