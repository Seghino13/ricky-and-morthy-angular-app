import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Info, Results } from 'src/app/models/resources.interface';
import { EmitSearchService } from 'src/app/services/emit-search/emit-search.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {
  @Input() resources?: Results[];
  @Output() selectItem = new EventEmitter<Results>();
  search: string = '';
  constructor(private emitSearchService:EmitSearchService) {
    this.emitSearchService.search.subscribe(search=>{
      this.search = search;
    });
   }

  ngOnInit(): void {}

  select(resource: Results){
    this.selectItem.emit(resource);
  }

}
