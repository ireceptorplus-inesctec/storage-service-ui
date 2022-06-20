import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FileCreateData } from "../../../../components/files/files-create/file-create-data";
import { HttpClientService } from "../../../services/http-client-service";
import { FilesModel } from "../../../../models/files";
import { FilesCreateResultToastComponent } from "../../../../components/files/files-create-result-toast/files-create-result-toast.component";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { FileSelectionComponent } from "../../../../components/pipelines/file-selection/file-selection.component";
import { DatasetService } from "../../../services/dataset-service";
import { CreatedPipeline } from "../../../../models/pipeline";
import { CreatedPipelineService } from "../../../services/created-pipeline-service";
import { ToolsService } from "../../../services/tools-service";
import { Tool } from "../../../../models/tool";
import { Command } from "../../../../models/Command";
import {CommandService} from "../../../services/command-service";

@Component({
  selector: 'app-run-pipeline',
  templateUrl: './create-pipeline.component.html',
  styleUrls: ['./create-pipeline.component.scss']
})
export class CreatePipelineComponent implements OnInit {

  /**
   * This EventEmitter is used to signal main component to create the file.
   */
  @Output() onFileUpload = new EventEmitter<FileCreateData>();

  datasetService = new DatasetService();
  pipelineService = new CreatedPipelineService();
  toolsService = new ToolsService();
  commandService = new CommandService();

  availableInputDatasets!: FilesModel[];

  public modalFileOpen = false;
  metadata: FilesModel = new FilesModel();
  script!: File;

  progress!: string;

  @ViewChild(FilesCreateResultToastComponent) resultToast!: FilesCreateResultToastComponent;
  @ViewChild(FileSelectionComponent) fileSelectionComponent!: FileSelectionComponent;

  @ViewChild(FilesCreateResultToastComponent) filesCreateResultToastComponent!: FilesCreateResultToastComponent;

  inputDatasets: FilesModel[] = new Array();

  tools: Tool[] = [];
  availableCommands: Command[] = [];



  pipelineCreateForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    script: ['', []],
    toolId: ['', [Validators.required]],
    commandId: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.datasetService.getAll().then(datasets => {
      this.availableInputDatasets = datasets;
    });
    this.toolsService.getAll().then(tools => {
      this.tools = tools;
    });
    this.commandService.getAll().then(commands => {
      this.availableCommands = commands;
      console.log(commands);
    });
  }

  toggleModalFile() {
    if (!this.modalFileOpen)
      this.initModal();

    this.modalFileOpen = !this.modalFileOpen;
  }

  initModal() {
    this.progress = "0";
  }

  openFilePickingModal() {
    this.fileSelectionComponent.toggleModalFile();
  }

  inputDatasetsSelected(inputDatasets: FilesModel[]) {
    this.inputDatasets = inputDatasets;
  }

  scriptFileChanged(event: Event)
  {
    let files = (<HTMLInputElement> event.target).files;
    if (files != null)
      this.script = files[0];
  }

  submit() {
    const pipeline = new CreatedPipeline();
    pipeline.name = this.pipelineCreateForm.get('name')?.value;
    pipeline.description = this.pipelineCreateForm.get('description')?.value;
    pipeline.commandId = this.pipelineCreateForm.get('commandId')?.value;
    console.log(JSON.stringify(pipeline));

    let inputDatasetsUuids: string[] = new Array();
    for (let file of this.inputDatasets)
    {
      inputDatasetsUuids.push(file.uuid);
    }
    pipeline.inputDatasetsUuids = inputDatasetsUuids;
    this.pipelineService.create(pipeline).then(serverReturn => {
        let createdPipeline: CreatedPipeline = serverReturn;
        this.showResultMessageToast(true, serverReturn);
        this.toggleModalFile();
      },
      serverReturn => {
        this.showResultMessageToast(false, serverReturn);
      });

  }

  showResultMessageToast(success: boolean, serverReturn: any)
  {
    let msgTitle: string;
    let msgDescription: string;
    if (success)
    {
      msgTitle = "Pipeline created successfully";
      msgDescription = "The pipeline was sucessfully created on server";
    }
    else
    {
      msgTitle = "Pipeline creation failed";
      msgDescription = "The pipeline creation has failed. Server returned: " + serverReturn;
    }
  }
}
