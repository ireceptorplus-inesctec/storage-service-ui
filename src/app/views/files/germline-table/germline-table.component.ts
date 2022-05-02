import { Component, OnInit } from '@angular/core';
import { FilesModel } from 'src/models/files';

@Component({
  selector: 'app-germline-table',
  templateUrl: './germline-table.component.html',
  styleUrls: ['./germline-table.component.scss']
})
export class GermlineTableComponent implements OnInit {
  germlines: FilesModel[] = [];

  constructor() {}

  ngOnInit(): void {
    fetch("https://trialreceptor.inesctec.pt/storage/api/germlines")
      .then(response => response.json() as Promise<FilesModel[]>)
      .then(files => {
        this.germlines = files;
      });
  }
}
