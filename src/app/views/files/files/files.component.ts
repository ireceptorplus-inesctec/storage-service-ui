import { Component } from '@angular/core';
import { FilesModel } from 'src/models/files';

@Component({
  selector: 'app-datasets',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {
  constructor() { }

  files: FilesModel[] = [];

  ngOnInit() {
    fetch("https://trialreceptor.inesctec.pt/storage/api/dataset")
      .then(response => response.json() as Promise<FilesModel[]>)
      .then(files => {
        this.files = files;
      });
  }
}
