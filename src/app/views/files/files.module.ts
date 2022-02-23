import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  TableModule,
} from '@coreui/angular';

import { ComponentsModule } from 'src/components/components.module';

import { FilesComponent } from './files/files.component';

import { FilesRoutingModule } from './files-routing.module';

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
  ],
  declarations: [
    FilesComponent
  ]
})
export class FilesModule {}
