import { Component, Input } from '@angular/core';
import { conversacionInfo } from 'src/models/Conversacion'


@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent {
    @Input() mInfo:conversacionInfo
    
   
    
}
