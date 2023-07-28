import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { userInfo } from 'src/models/Chats';


@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent {
  id: string | null | undefined;
  userInfo: userInfo | undefined;



  constructor(private route: ActivatedRoute) {}

  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getInfo()
  }


  async getInfo(){
    
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
