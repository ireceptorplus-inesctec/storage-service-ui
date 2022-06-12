import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ButtonGroupModule,
  ButtonModule, CalloutModule,
  CardModule, DropdownModule,
  FormModule,
  GridModule, ModalModule,
  TableModule,
} from '@coreui/angular';

import { PipelinesRoutingModule } from './tools/pipelines-routing.module';

import { ComponentsModule } from 'src/components/components.module';

import { IconModule } from '@coreui/icons-angular';

import { FormsModule } from '@angular/forms';
import { ToolsComponent } from "./tools/tools.component";
import { CreatePipelineComponent } from "./run-pipeline/create-pipeline.component";
import { FileCreateService } from "../../services/file-create-service";
import { HttpClientModule } from "@angular/common/http";
import { FileSelectionComponent } from "../../../components/pipelines/file-selection/file-selection.component";
import { FilesModule } from "../files/files.module";

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
    CalloutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    FilesModule,
    DropdownModule
  ],
  declarations: [
    ToolsComponent,
    CreatePipelineComponent,
    FileSelectionComponent
  ],
  providers: [
    FileCreateService
  ]
})
export class PipelinesModule {}
