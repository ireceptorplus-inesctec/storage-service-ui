import {Component, OnInit, ViewChild} from '@angular/core';
import {FilesModel} from "../../../../models/files";
import {DatasetService} from "../../../services/dataset-service";
import {FilesCreateComponent} from "../../../../components/files/files-create/files-create.component";
import {Tool} from "../../../../models/tool";
import {ToolsService} from "../../../services/tools-service";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  tools: Tool[] = [];
  toolsService = new ToolsService();

  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];

  imgContext = { $implicit: 'top', bottom: 'bottom' };


  constructor() {}

  ngOnInit(): void {
    this.toolsService.getAll().then(tools => {
      this.tools = tools;
    })
  }

}
