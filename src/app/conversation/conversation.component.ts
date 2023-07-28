import { Component } from '@angular/core';
import { faPaperPlane, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute} from '@angular/router';
import { conversacionInfo } from 'src/models/Conversacion'

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  id: string | null;
  info:Array<conversacionInfo>;
  back:string;
  receptor:number;
  receptorInfo:any;
  userNameImg:string;
  imgON:boolean;

  enviar = faPaperPlane;
  atras = faChevronLeft;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerInfodeConversacion()
  }

  async obtenerInfodeConversacion(){

    let respuesta = await fetch(`http://localhost:3000/conversaciones/${this.id}/mensajes/`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    });

    let j = await respuesta.json();
    this.info = j;
    this.back = `chats/${this.info[0].emisor}`;

    this.receptor = this.info[0].receptor;
    this.obtenerReceptor();

  }

  async obtenerReceptor(){
    let respuesta = await fetch(`http://localhost:3000/usuarios/${this.receptor}/`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    });

    let j = await respuesta.json();
    this.receptorInfo = j;

    if (this.receptorInfo.imagen == null || this.receptorInfo.imagen == ""){
      this.imgON = false
      this.userNameImg = this.receptorInfo.nombre[0];
      
    }else{
      this.imgON = true
      this.userNameImg = this.receptorInfo.imagen;
    } 

  }




}
