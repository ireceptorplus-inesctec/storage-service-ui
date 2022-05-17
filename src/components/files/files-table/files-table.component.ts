import { Component, Input } from '@angular/core';
import { FilesModel } from 'src/models/files';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../app/icons/icon-subset';

@Component({
  selector: 'files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.scss'],
  providers: [ IconSetService ]
})
export class FilesTableComponent {
  @Input() files: FilesModel[] = [];
  actionName: string = "Details";
  @Input() selectable: boolean = false;

  constructor( public iconSetService: IconSetService ) {
    iconSetService.icons = { ...iconSubset };
  }
}
