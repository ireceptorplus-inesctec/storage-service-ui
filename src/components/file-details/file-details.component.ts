import { Component, Input, OnInit } from '@angular/core';
import { FilesModel } from "../../models/files";
import { environment } from "../../environments/environment";
import { HttpClientService } from "../../app/services/http-client-service";

@Component({
  selector: 'file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.scss']
})
export class FileDetailsComponent {
  numberOfLinesToPreview: number = 5;

  @Input() file!: FilesModel;

  public modalFileOpen = false;
  baseApiUrl: string = environment.apiUrl;
  filePreview!: string;

  constructor() {
  }

  toggleModalFile() {
    this.modalFileOpen = !this.modalFileOpen;
  }

  public initModal() {
    this.getFilePreviewFromServer();
  }

  private getFilePreviewFromServer() {
    let url = new URL(this.baseApiUrl + "/file/" + this.file.uuid + "/getFirstLines");
    url.searchParams.append("numberOfLines", this.numberOfLinesToPreview.toString());
    let httpClientService = new HttpClientService<FilesModel>("files");
    httpClientService.request(url.toString(), 'GET').then(serverReturn => {
        console.log(serverReturn)
        this.filePreview = serverReturn;
      },
      serverReturn => {
        console.log("Error fetching file preview from server");
        console.log("Server returned: " + serverReturn);
      });
  }

  handleModalFileChange(event: boolean) {
    this.modalFileOpen = event;
  }

}
