import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AdminHeaderService {

  public headerText = new BehaviorSubject("");
  constructor() { }
}
