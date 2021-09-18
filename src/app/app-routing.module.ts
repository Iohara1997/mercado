import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercadoriasComponent } from './mercadorias/mercadorias.component';

const routes: Routes = [
  { path: '', redirectTo:'/mercadorias', pathMatch:'full' },
  { path: 'mercadorias', component: MercadoriasComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
