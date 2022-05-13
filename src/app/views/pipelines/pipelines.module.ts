import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ButtonGroupModule,
  ButtonModule, CalloutModule,
  CardModule,
  FormModule,
  GridModule,
  TableModule,
} from '@coreui/angular';

import { PipelinesRoutingModule } from './tools/pipelines-routing.module';

import { ComponentsModule } from 'src/components/components.module';

import { IconModule } from '@coreui/icons-angular';

import { FormsModule } from '@angular/forms';
import { ToolsComponent } from "./tools/tools.component";

@NgModule({
  imports: [
    FormsModule,

    PipelinesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,

    GridModule,
    CardModule,
    TableModule,

    ButtonModule,
    ButtonGroupModule,
    FormModule,

    IconModule,
    CardModule,
    CalloutModule
  ],
  declarations: [
    ToolsComponent,
  ]
})
export class PipelinesModule {}
