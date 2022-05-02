import { Component, OnInit } from '@angular/core';
import { FilesModel } from 'src/models/files';

@Component({
  selector: 'app-datasets-table',
  templateUrl: './datasets-table.component.html',
  styleUrls: ['./datasets-table.component.scss']
})
export class DatasetsTableComponent implements OnInit {
  datasets: FilesModel[] = [];

  constructor() {}

  ngOnInit(): void {
    fetch("https://trialreceptor.inesctec.pt/storage/api/dataset")
      .then(response => response.json() as Promise<FilesModel[]>)
      .then(files => {
        this.datasets = files;
      });
  }
}
