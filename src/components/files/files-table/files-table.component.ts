import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
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
  @Input() actionName: string = "Details";
  @Input() contentName: string = "Files";
  @Input() selectable: boolean = false;

  selectedFiles: FilesModel[] = new Array();
  @Output() selectedFilesOutput = new EventEmitter<FilesModel[]>();

  checkboxPrefix: string = "checkbox-for-file-";

  @ViewChild(FileDetailsComponent) fileDetailsComponent!: FileDetailsComponent;

  @Input() columnsToDisplay: string[] = [];

  constructor( public iconSetService: IconSetService ) {
    iconSetService.icons = { ...iconSubset };
  }

  openFileDetails(file: FilesModel)
  {
    this.fileDetailsComponent.file = file;
    this.fileDetailsComponent.initModal();
    this.fileDetailsComponent.toggleModalFile();
  }

  checkBoxStateChanged(event: Event)
  {
    let id: string = (<HTMLInputElement>event.target).id;
    let fileUuid: string = id.substring(id.indexOf(this.checkboxPrefix) + this.checkboxPrefix.length);
    if (this.getFileFromList(fileUuid, this.selectedFiles) != null)
      this.removeFileFromArray(fileUuid);
    else
    {
      let file = this.getFileFromList(fileUuid, this.files);
      if (file != null)
        this.selectedFiles.push(file);
    }

    this.selectedFilesOutput.emit(this.selectedFiles);
  }

  private removeFileFromArray(fileUuid: string) {
    for (let file of this.selectedFiles) {
      if (file.uuid == fileUuid) {
        this.selectedFiles.forEach((value, index) => {
          if (value.uuid == fileUuid) this.selectedFiles.splice(index, 1);
        });
      }
    }
  }

  getFileFromList(uuid: string, filesList: FilesModel[]): FilesModel | null
  {
    for  (let file of filesList)
    {
      if (file.uuid == uuid)
        return file;
    }

    return null;
  }
}
