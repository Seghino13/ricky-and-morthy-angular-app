import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitSearchService {
  public search = new EventEmitter<string>();
}
