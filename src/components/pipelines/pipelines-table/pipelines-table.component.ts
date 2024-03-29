import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { FilesModel } from 'src/models/files';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../app/icons/icon-subset';
import { FileDetailsComponent } from "../../file-details/file-details.component";
import { Pipeline } from "../../../models/pipeline";
import { PipelineDetailsComponent } from "../pipeline-details/pipeline-details.component";

@Component({
  selector: 'pipelines-table',
  templateUrl: './pipelines-table.component.html',
  styleUrls: ['./pipelines-table.component.scss'],
  providers: [ IconSetService ],
})
export class PipelinesTableComponent {
  @Input() pipelines: Pipeline[] = [];
  @Input() pipelinesLoaded: boolean = false;
  @Input() actionName: string = "Details";
  @Input() contentName: string = "Pipelines";
  @Input() selectable: boolean = false;
  @Input() showUuid: boolean = false;
  @Input() showName: boolean = true;
  @Input() showDescription: boolean = true;
  @Input() showDate: boolean = true;
  @Input() showTool: boolean = true;
  @Input() showBlockchainState: boolean = true;
  @Input() showCreator: boolean = false;

  selectedFiles: FilesModel[] = new Array();
  @Output() selectedFilesOutput = new EventEmitter<FilesModel[]>();

  checkboxPrefix: string = "checkbox-for-file-";


  @ViewChild(PipelineDetailsComponent) pipelineDetailsComponent!: PipelineDetailsComponent;

  @Input() columnsToDisplay: string[] = [
    "Name",
    "Description",
    "Date",
    "Tool",
    "Command",
    "Blockchain sync state"
  ];

  constructor( public iconSetService: IconSetService ) {
    iconSetService.icons = { ...iconSubset };
  }

  openPipelineDetails(pipeline: Pipeline)
  {
    this.pipelineDetailsComponent.initModal(pipeline);
    this.pipelineDetailsComponent.toggleModalFile();
  }

  checkBoxStateChanged(event: Event)
  {
    let id: string = (<HTMLInputElement>event.target).id;
    let fileUuid: string = id.substring(id.indexOf(this.checkboxPrefix) + this.checkboxPrefix.length);
    if (this.getFileFromList(fileUuid, this.selectedFiles) != null)
      this.removeFileFromArray(fileUuid);
    else
    {
      let file = this.getFileFromList(fileUuid, this.pipelines);
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
