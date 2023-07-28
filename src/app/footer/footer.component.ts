import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
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

  id:any;

  opcionMenu: string = "Chats";

  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }


  seleccionarOpcionMenu(opcion: string) {
    this.opcionMenu = opcion;

  }

}
