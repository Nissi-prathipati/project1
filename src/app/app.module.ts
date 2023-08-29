import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { AppServiceService } from './app-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    UserLoginComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
