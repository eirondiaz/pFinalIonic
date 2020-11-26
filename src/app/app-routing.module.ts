import { PacienteprofilePageModule } from './pages/pacienteprofile/pacienteprofile.module';
import { NotLoggedGuard } from './guards/not-logged.guard';
import { LoggedGuard } from './guards/logged.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    canActivate: [LoggedGuard],
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    canActivate: [LoggedGuard],
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'dashboard',
    canActivate: [NotLoggedGuard],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'profile',
    canActivate: [NotLoggedGuard],
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'changepass',
    canActivate: [NotLoggedGuard],
    loadChildren: () => import('./pages/changepass/changepass.module').then( m => m.ChangepassPageModule)
  },
  {
    path: 'updatedata',
    canActivate: [NotLoggedGuard],
    loadChildren: () => import('./pages/updatedata/updatedata.module').then( m => m.UpdatedataPageModule)
  },
  {
    path: 'showallpacientes',
    canActivate: [NotLoggedGuard],
    loadChildren: () => import('./pages/showallpacientes/showallpacientes.module').then( m => m.ShowallpacientesPageModule)
  },
  {
    path: 'showconsulta',
    canActivate: [NotLoggedGuard],
    loadChildren: () => import('./pages/showconsulta/showconsulta.module').then( m => m.ShowconsultaPageModule)
  },
  {
    path: 'registrarpaciente',
    canActivate: [NotLoggedGuard],
    loadChildren: () => import('./pages/registrarpaciente/registrarpaciente.module').then( m => m.RegistrarpacientePageModule)
  },
  {
    path: 'registrarvisita',
    canActivate: [NotLoggedGuard],
    loadChildren: () => import('./pages/registrarvisita/registrarvisita.module').then( m => m.RegistrarvisitaPageModule)
  },
  {
    path: 'pacienteprofile/:id',
    canActivate: [NotLoggedGuard],
    loadChildren: () => import('./pages/pacienteprofile/pacienteprofile.module').then( m => m.PacienteprofilePageModule)
  },  {
    path: 'showallconsultas',
    loadChildren: () => import('./pages/showallconsultas/showallconsultas.module').then( m => m.ShowallconsultasPageModule)
  }

];




@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
