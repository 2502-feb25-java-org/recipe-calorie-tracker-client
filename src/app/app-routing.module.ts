import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'register', component: UserregisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
