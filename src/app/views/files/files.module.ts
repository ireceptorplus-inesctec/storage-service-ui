import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalModule,
  TableModule,
} from '@coreui/angular';

import { ComponentsModule } from 'src/components/components.module';
import { FilesTableComponent } from './files-table/files-table.component';
import { FilesRoutingModule } from './files-routing.module';
import { GermlineTableComponent } from './germline-table/germline-table.component';
import { DatasetsTableComponent } from './datasets-table/datasets-table.component';
import { FilesCreateComponent } from './files-create/files-create.component';

@NgModule({
  imports: [
    FilesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,

    GridModule,
    CardModule,
    TableModule,

    ButtonModule,
    ButtonGroupModule,
    FormModule,

    ModalModule
  ],
  declarations: [
    FilesTableComponent,
    FilesCreateComponent,
    DatasetsTableComponent,
    GermlineTableComponent
  ]
})
export class FilesModule {}
