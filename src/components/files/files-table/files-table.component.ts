import { Component, Input } from '@angular/core';
import { FilesModel } from 'src/models/files';

@Component({
  selector: 'files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.scss']
})
export class FilesTableComponent {
  @Input() files: FilesModel[] = [];
  actionName: string = "Details";
  @Input() selectable: boolean = false;

  constructor() { }
}
