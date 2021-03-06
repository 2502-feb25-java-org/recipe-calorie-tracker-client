import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { IngredientService } from './services/ingredient.service';
import { DataTablesModule } from 'angular-datatables';
import { GraphComponent } from './components/graph/graph.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    UserregisterComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    LogoutComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    DataTablesModule,
    ChartsModule
  ],
  providers: [
    UserService,
    IngredientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
