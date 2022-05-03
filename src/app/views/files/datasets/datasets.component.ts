import { Component, OnInit } from '@angular/core';
import { DatasetService } from 'src/app/services/dataset-service';
import { FilesModel } from 'src/models/files';

@Component({
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})
export class DatasetsComponent implements OnInit {
  datasets: FilesModel[] = [];
  datasetService = new DatasetService;

  constructor() {}

  ngOnInit(): void {
    this.datasetService.getAll().then(datasets => {
      this.datasets = datasets;
    })
  }

  uploadDataset(formData) {
    let file = new FilesModel();
    this.datasetService.createFile()
  }
}
