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

import { FilesRoutingModule } from './files-routing.module';

import { ComponentsModule } from 'src/components/components.module';
import { FilesTableComponent } from 'src/components/files/files-table/files-table.component'
import { FilesCreateComponent } from 'src/components/files/files-create/files-create.component'

import { GermlinesComponent } from './germlines/germlines.component';
import { DatasetsComponent } from './datasets/datasets.component';

import { IconModule } from '@coreui/icons-angular';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,

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

    ModalModule,
    IconModule
  ],
  declarations: [
    FilesTableComponent,
    FilesCreateComponent,
    DatasetsComponent,
    GermlinesComponent
  ]
})
export class FilesModule {}
