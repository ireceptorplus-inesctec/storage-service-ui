import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasetsComponent } from './datasets/datasets.component';
import { GermlinesComponent } from './germlines/germlines.component';
import { UmisComponent } from "./umis/umis.component";
import { FileDetailsComponent } from "../../../components/file-details/file-details.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Files',
    },
    children: [
      {
        path: '',
        redirectTo: 'datasets',
        pathMatch: 'full'
      },
      {
        path: 'datasets',
        component: DatasetsComponent,
        data: {
          title: 'Datasets List',
        },
      },
      {
        path: 'germlines',
        component: GermlinesComponent,
        data: {
          title: 'Germline List',
        },
      },
      {
        path: 'umis',
        component: UmisComponent,
        data: {
          title: 'UMIs List',
        },
      },
      {
        path: 'details/:fileId',
        component: FileDetailsComponent,
        data: {
          title: 'File details',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilesRoutingModule {}
