import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatsComponent } from './chats/chats.component';
import { ConversationComponent } from './conversation/conversation.component';
import { CallsComponent } from './calls/calls.component';

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
  },
  {
    path:'calls/:id',
    component: CallsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
