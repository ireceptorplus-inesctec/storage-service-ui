import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CalloutModule, NavModule, ProgressModule, TabsModule, ToastModule, UtilitiesModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { DocsExampleComponent } from './docs-example/docs-example.component';
import { DocsLinkComponent } from './docs-link/docs-link.component';
import { DocsCalloutComponent } from './docs-callout/docs-callout.component';
import { FilesCreateResultToastComponent } from './files/files-create-result-toast/files-create-result-toast.component';
import { ToastSampleIconComponent } from "../app/views/notifications/toasters/toast-simple/toast-sample-icon.component";

@NgModule({
  declarations: [
    DocsExampleComponent,
    DocsLinkComponent,
    DocsCalloutComponent,
    FilesCreateResultToastComponent,
    ToastSampleIconComponent
  ],
  exports: [
    DocsExampleComponent,
    DocsLinkComponent,
    DocsCalloutComponent,
    FilesCreateResultToastComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    IconModule,
    RouterModule,
    TabsModule,
    UtilitiesModule,
    CalloutModule,
    ToastModule,
    ProgressModule,
  ]
})
export class ComponentsModule {
}
