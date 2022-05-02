import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasetsTableComponent } from './datasets-table/datasets-table.component';
import { GermlineTableComponent } from './germline-table/germline-table.component';

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
        component: DatasetsTableComponent,
        data: {
          title: 'Datasets List',
        },
      },
      {
        path: 'germlines',
        component: GermlineTableComponent,
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
