import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting/setting.component';

console.log('setting')
@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
