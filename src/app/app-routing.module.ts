import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatsComponent } from './chats/chats.component';
import { IndividualChatComponent } from './individual-chat/individual-chat.component';
import { ConversationComponent } from './conversation/conversation.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'chats/:id',
    component: ChatsComponent
  },
  {
    path:'chats/:id/conversaciones/:id',
    component: ConversationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
