import { Component } from '@angular/core';
import { faPhone, faCommentDots, faUserGroup, faEllipsis} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  Chats = faCommentDots;
  Calls = faPhone; 
  Teams = faUserGroup;
  More = faEllipsis;

  opcionMenu: string = "Chats";


  seleccionarOpcionMenu(opcion: string) {
    this.opcionMenu = opcion;
  }

}
