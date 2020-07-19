import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
   imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ButtonComponent,
    CardComponent,
    JumbotronComponent, 
    HomeComponent
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
