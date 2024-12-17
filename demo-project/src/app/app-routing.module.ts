import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SettingModule } from './modules/setting/setting.module';

const routes: Routes = [
 
  {
    path: 'dashboard' , loadChildren:()=>import('./modules/dashboard/dashboard.module')
    .then(mod=>mod.DashboardModule)
  },
  {
    path: 'setting' , loadChildren:()=>import('./modules/setting/setting.module')
    .then(mod=>mod.SettingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
