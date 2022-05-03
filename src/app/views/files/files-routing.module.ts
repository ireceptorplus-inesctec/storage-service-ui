import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasetsComponent } from './datasets/datasets.component';
import { GermlinesComponent } from './germlines/germlines.component';

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
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilesRoutingModule {}
