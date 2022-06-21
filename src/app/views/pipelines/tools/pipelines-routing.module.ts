import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolsComponent } from "./tools.component";
import { CreatePipelineComponent } from "../run-pipeline/create-pipeline.component";
import { FinishedPipelinesComponent } from "../finished-pipelines/finished-pipelines.component";
import {RunningPipelinesComponent} from "../running-pipelines/running-pipelines.component";
import {
  AwaitingValidationPipelinesComponent
} from "../awaiting-validation-pipelines/awaiting-validation-pipelines.component";

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
      },
      {
        path: 'tools',
        component: ToolsComponent,
        data: {
          title: 'Datasets List',
        }
      },
      {
        path: 'create',
        component: CreatePipelineComponent,
        data: {
          title: 'Run pipeline',
        }
      },
      {
        path: 'running',
        component: RunningPipelinesComponent,
        data: {
          title: 'Running',
        }
      },
      {
        path: 'finished',
        component: FinishedPipelinesComponent,
        data: {
          title: 'Finished',
        }
      },
      {
        path: 'awaitingValidation',
        component: AwaitingValidationPipelinesComponent,
        data: {
          title: 'Awaiting Validation',
        }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipelinesRoutingModule {}
