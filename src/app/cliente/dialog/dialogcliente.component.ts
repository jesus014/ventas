import { Component, Inject } from "@angular/core";
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
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
    @Inject(MAT_DIALOG_DATA ) public cliente:Cliente
  )
  {

    if(this.cliente !=null){
      this.nombre =cliente.nombre;
    }

  }

  close(){
    this.dialogRef.close();
  }

  
  editCliente(){
    const cliente: Cliente = { nombre: this.nombre, id: this.cliente.id};
    this.apiCliente.edit(cliente).subscribe(response => {
      //console.log('prueba2');
      if (response.exito === 1) {
        //console.log('prueba');
        this.dialogRef.close();
        this.snackBar.open('cliente Editado con exito', '' , {duration: 2000});
      }
      else{
        console.log('fallo');
      }
    });


  }

  addCliente() {
    //const cliente: Cliente={ nombre: 'lazaro'};
    const cliente: Cliente = { nombre: this.nombre, id: 0};
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
