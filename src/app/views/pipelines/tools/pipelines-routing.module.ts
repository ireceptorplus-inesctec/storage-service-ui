import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolsComponent } from "./tools.component";
import { CreatePipelineComponent } from "../run-pipeline/create-pipeline.component";
import { FinishedPipelinesComponent } from "../finished-pipelines/finished-pipelines.component";
import {RunningPipelinesComponent} from "../running-pipelines/running-pipelines.component";
import {
  AwaitingValidationPipelinesComponent
} from "../awaiting-validation-pipelines/awaiting-validation-pipelines.component";
import {ValidatedPipelinesComponent} from "../validated-pipelines/validated-pipelines.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Files',
    },
    children: [
      {
        path: '',
        redirectTo: 'tools',
        pathMatch: 'full'
      },
      {
        path: 'tools',
        component: ToolsComponent,
        data: {
          title: 'Datasets List',
        },
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CreatePipelineComponent,
        data: {
          title: 'Run pipeline',
        },
        pathMatch: 'full'
      },
      {
        path: 'running',
        component: RunningPipelinesComponent,
        data: {
          title: 'Running',
        },
        pathMatch: 'full'
      },
      {
        path: 'finished',
        component: FinishedPipelinesComponent,
        data: {
          title: 'Finished',
        },
        pathMatch: 'full'
      },
      {
        path: 'awaitingValidation',
        component: AwaitingValidationPipelinesComponent,
        data: {
          title: 'Awaiting Validation',
        },
        pathMatch: 'full'
      },
      {
        path: 'validated',
        component: ValidatedPipelinesComponent,
        data: {
          title: 'Validated',
        },
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipelinesRoutingModule {}
