import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JHipsterTestSharedModule } from 'app/shared/shared.module';

import { JhiMetricsMonitoringComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [JHipsterTestSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [JhiMetricsMonitoringComponent]
})
export class MetricsModule {}
