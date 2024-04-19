import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './customers/register/register.component';
import { LoginComponent } from './customers/login/login.component';
import { ConfirmationComponent } from './customers/confirmation/confirmation.component';
import { ResetpasswordComponent } from './customers/resetpassword/resetpassword.component';
import { CategoryComponent } from './admin/categories/category/category.component';
import { CategoryFormComponent } from './admin/categories/category-form/category-form.component';
import { GenreComponent } from './admin/genus/genre/genre.component';
import { GenreFormComponent } from './admin/genus/genre-form/genre-form.component';
import { SubgenreComponent } from './admin/subgenres/subgenre/subgenre.component';
import { SubgenreFormComponent } from './admin/subgenres/subgenre-form/subgenre-form.component';
import { GenressubgenreComponent } from './admin/genresubgenre/genressubgenre/genressubgenre.component';
import { GenresubgenreFormComponent } from './admin/genresubgenre/genresubgenre-form/genresubgenre-form.component';

const routes: Routes = [
  //Clientes
  { path: 'mundo-literario/register', component: RegisterComponent},
  {path: 'mundo-literario/login',component: LoginComponent},
  {path: 'mundo-literario/confirmation',component: ConfirmationComponent},
  { path: 'mundo-literario/reset-password',component: ResetpasswordComponent },
   //Categorías
   { path: 'mundo-literario/admin/mantenimiento-categorias',component: CategoryComponent},
   { path:  'mundo-literario/admin/form-categoria', component:CategoryFormComponent},
   { path:  'mundo-literario/admin/form-categoria/:id', component:CategoryFormComponent},
  //Géneros
  { path: 'mundo-literario/admin/mantenimiento-generos',component: GenreComponent},
  { path:  'mundo-literario/admin/form-genero', component:GenreFormComponent},
  { path:  'mundo-literario/admin/form-genero/:id', component:GenreFormComponent},
  //Subgéneros
  { path: 'mundo-literario/admin/mantenimiento-subgeneros',component: SubgenreComponent},
  { path:  'mundo-literario/admin/form-subgenero', component:SubgenreFormComponent},
  { path:  'mundo-literario/admin/form-subgenero/:id', component:SubgenreFormComponent},
  //Géneros - Sugéneros
  { path: 'mundo-literario/admin/mantenimiento-generos-subgeneros',component: GenressubgenreComponent},
  { path:  'mundo-literario/admin/form-genero-subgenero', component:GenresubgenreFormComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
