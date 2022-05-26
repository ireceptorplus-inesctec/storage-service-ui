import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolsComponent } from "./tools.component";
import {RunPipelineComponent} from "../run-pipeline/run-pipeline.component";

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
        path: 'run',
        component: RunPipelineComponent,
        data: {
          title: 'Run pipeline',
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
