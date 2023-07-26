import { Component,Input } from '@angular/core';
import { info } from 'src/models/InfoChats'


@Component({
  selector: 'app-individual-chat',
  templateUrl: './individual-chat.component.html',
  styleUrls: ['./individual-chat.component.scss']
})
export class IndividualChatComponent {
  @Input() infoChats: info;

}
