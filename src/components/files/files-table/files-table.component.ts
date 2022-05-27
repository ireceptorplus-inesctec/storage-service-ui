import { Component, Input, ViewChild } from '@angular/core';
import { FilesModel } from 'src/models/files';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../app/icons/icon-subset';
import { FileDetailsComponent } from "../../file-details/file-details.component";

@Component({
  selector: 'files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.scss'],
  providers: [ IconSetService ],
})
export class FilesTableComponent {
  @Input() files: FilesModel[] = [];
  actionName: string = "Details";
  @Input() selectable: boolean = false;

  @ViewChild(FileDetailsComponent) fileDetailsComponent!: FileDetailsComponent;

  constructor( public iconSetService: IconSetService ) {
    iconSetService.icons = { ...iconSubset };
  }

  openFileDetails(file: FilesModel)
  {
    console.log("opening modal")
    this.fileDetailsComponent.file = file;
    this.fileDetailsComponent.initModal();
    this.fileDetailsComponent.toggleModalFile();
  }
}
