import { Component, OnInit } from '@angular/core';
import { FilesModel } from "../../../../models/files";
import { UmiService } from "../../../services/umi-service";

@Component({
  selector: 'app-umis',
  templateUrl: './umis.component.html',
  styleUrls: ['./umis.component.scss']
})
export class UmisComponent implements OnInit {

  umis: FilesModel[] = [];
  umisAreLoaded: boolean = false;
  umiService = new UmiService;

  constructor() { }

  ngOnInit(): void {
  }

}
