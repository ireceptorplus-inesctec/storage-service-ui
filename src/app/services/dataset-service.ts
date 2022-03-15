import {HttpClientService} from './http-client-service';
import {Injectable} from '@angular/core';
import {Metadata} from '../metadata';


export class DatasetService extends HttpClientService<Metadata>
{
  constructor() {
    super('dataset');
  }
}
