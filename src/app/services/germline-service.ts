import {HttpClientService} from './http-client-service';
import {Injectable} from '@angular/core';
import {Metadata} from '../metadata';


export class GermlineService extends HttpClientService<Metadata>
{
  constructor() {
    super('germline');
  }
}
