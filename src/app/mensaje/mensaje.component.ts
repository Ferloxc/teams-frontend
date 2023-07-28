import { Component, Input } from '@angular/core';
import { conversacionInfo } from 'src/models/Conversacion'


@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent {
    @Input() mInfo:conversacionInfo;  
    receptorInfo:any;
    userNameImg:string;
    nombre:String;
    receptorID:number;    
    
    ngOnInit(): void {
      this.obtenerReceptor(this.mInfo.receptor)
    }   
    

    async obtenerReceptor(receptor:number){
      let respuesta = await fetch(`http://localhost:3000/usuarios/${receptor}/`, {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      });
  
      let j = await respuesta.json();
      this.receptorInfo = j;
      this.nombre = this.receptorInfo.nombre; 
  
    }



}
