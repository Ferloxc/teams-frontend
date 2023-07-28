import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { userInfo } from 'src/models/Chats'


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent {
  id: string | null | undefined;
  userInfo: userInfo | undefined;
  chats:string = "";


  constructor(private route: ActivatedRoute) {}

  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAllChats()
  }

  async getAllChats(){
    
    let respuesta = await fetch(`http://localhost:3000/usuarios/${this.id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    });

    let j = await respuesta.json()
    this.userInfo = j
    
  }

  
}
