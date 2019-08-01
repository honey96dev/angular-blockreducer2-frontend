import {Injectable} from '@angular/core';

@Injectable()
export class GlobalVariableService {

  constructor() {
  }

  chartTimeoutId: number = null;
}
