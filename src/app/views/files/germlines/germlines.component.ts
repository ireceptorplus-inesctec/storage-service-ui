import { Component, OnInit } from '@angular/core';
import { GermlineService } from 'src/app/services/germline-service';
import { FilesModel } from 'src/models/files';

@Component({
  templateUrl: './germlines.component.html',
  styleUrls: ['./germlines.component.scss']
})
export class GermlinesComponent implements OnInit {
  germlines: FilesModel[] = [];
  germlineService = new GermlineService;

  constructor() {}

  ngOnInit(): void {
    this.germlineService.getAll().then(germlines => {
      this.germlines = germlines;
    });
  }
}
