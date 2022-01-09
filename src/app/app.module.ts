import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { SortPipe } from './pipes/sort.pipe';
import { SortFechaPipe } from './pipes/sort-fecha.pipe';
import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    SortPipe,
    SortFechaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
