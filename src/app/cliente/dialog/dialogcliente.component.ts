import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ApiclienteService } from '../../services/apicliente.service';
import { Cliente } from '../../models/cliente';
import{FormsModule} from '@angular/forms'

@Component({
  templateUrl:'dialogcliente.component.html'
})
export class DialogClienteComponent{

  public nombre: string;
  constructor(
    public dialogRef: MatDialogRef <DialogClienteComponent>,
    public apiCliente: ApiclienteService,
    public snackBar: MatSnackBar,
  ){ }

  close(){
    this.dialogRef.close();
  }

  addCliente() {
    //const cliente: Cliente={ nombre: 'lazaro'};
    const cliente: Cliente = { nombre: this.nombre};
    console.log(cliente);
    this.apiCliente.add(cliente).subscribe(response => {
      //console.log('prueba2');
      if (response.exito === 1) {
        //console.log('prueba');
        this.dialogRef.close();
        this.snackBar.open('cliente insertado con exito', '' , {duration: 2000});
      }
      else{
        console.log('fallo');
      }
    });
  }
}
