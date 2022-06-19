import {Component, OnInit, ViewChild} from '@angular/core';
import { DatasetService } from 'src/app/services/dataset-service';
import { FilesModel } from 'src/models/files';
import { FilesCreateComponent } from "../../../../components/files/files-create/files-create.component";

@Component({
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})
export class DatasetsComponent implements OnInit {
  datasets: FilesModel[] = [];
  datasetService = new DatasetService;

  columnsToDisplayOnTable = [
    "UUID",
    "Name",
    "Description",
    "Date"
  ];

  @ViewChild(FilesCreateComponent) filesCreateComponent!: FilesCreateComponent;

  constructor() {}

  ngOnInit(): void {
    this.datasetService.getAll().then(datasets => {
      this.datasets = datasets;
    })
  }
}
