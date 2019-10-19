import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JHipsterTestSharedModule } from 'app/shared/shared.module';

import { JhiConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [JHipsterTestSharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [JhiConfigurationComponent]
})
export class ConfigurationModule {}
