import { Component } from '@angular/core';
import { Producto } from '../model/Producto';
import { ProductoServiceService } from '../services/producto-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  listaProductos: Producto[] =[];

  constructor(private productoService: ProductoServiceService) {}

  ionViewDidEnter(){
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productoService.listarProductos().subscribe((res: any) =>{
        this.listaProductos=res;
    } );
  }


}
