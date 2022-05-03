import { Component, OnInit } from '@angular/core';
import { FilesModel } from 'src/models/files';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})
export class DatasetsComponent implements OnInit {
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
