import { Component } from '@angular/core';

import { navItems } from './_nav';
import {DatasetService} from "../../services/dataset-service";
import {TraceabilityDataService} from "../../services/traceability-data-service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  public navItems = navItems;
  orgName?: string;
  datasetService = new TraceabilityDataService();

  ngOnInit(): void {
    this.datasetService.getMyOrgDetails().then((orgDetails) => {
      this.orgName = orgDetails.orgName;
    })
  }

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}
}
