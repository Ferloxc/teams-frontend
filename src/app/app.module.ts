import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChatsComponent } from './chats/chats.component';
import { IndividualChatComponent } from './individual-chat/individual-chat.component';
import { FormsModule } from '@angular/forms';
import { ConversationComponent } from './conversation/conversation.component';
import { MensajeComponent } from './mensaje/mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    ChatsComponent,
    IndividualChatComponent,
    ConversationComponent,
    MensajeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
