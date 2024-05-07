import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { IndexSixComponent } from './index-six/index-six.component';

@NgModule({
  declarations: [
    IndexComponent,
    IndexSixComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, SharedModule, NgxTypedJsModule],
})
export class PagesModule { }
