import { Component,Input } from '@angular/core';
import { info } from 'src/models/InfoChats'
import { faUserGroup} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-individual-chat',
  templateUrl: './individual-chat.component.html',
  styleUrls: ['./individual-chat.component.scss']
})
export class IndividualChatComponent {
  userNameImg: string;
  isAGropy: boolean;
  Teams = faUserGroup;
  @Input() infoChats: info;

  ngOnInit(){

    if (this.infoChats.imagenDestinatario == null || this.infoChats.imagenDestinatario == ""){
      if(typeof this.infoChats.idGrupo == "number"){
        console.log("Es un grupo")
        this.isAGropy = true;
      }else{
        this.userNameImg = this.infoChats.nombreDestinatario[0];
        this.isAGropy = false;

      }
      
    }else{
      this.userNameImg = this.infoChats.imagenDestinatario;
    }

  }

}
