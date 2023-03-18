import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page1homeComponent } from './pages/page1home/page1home.component';
import { Page2Component } from './pages/page2/page2.component';
import { ButtonComponent } from './components/button/button.component';
import { Page3Component } from './pages/page3/page3.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Page1homeComponent,
    Page2Component,
    ButtonComponent,
    Page3Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
