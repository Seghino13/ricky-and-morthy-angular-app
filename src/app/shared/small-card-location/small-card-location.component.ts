import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsLocations } from 'src/app/models/resources.interface';
import { EmitSearchService } from 'src/app/services/emit-search/emit-search.service';

@Component({
  selector: 'app-small-card-location',
  templateUrl: './small-card-location.component.html',
  styleUrls: ['./small-card-location.component.scss']
})
export class SmallCardLocationComponent implements OnInit {
  @Input() resources?: ResultsLocations[];
  @Output() selectItem = new EventEmitter<ResultsLocations>();
  search: string = '';
  constructor(private emitSearchService:EmitSearchService, private router: Router) {
    this.emitSearchService.search.subscribe(search=>{
      this.search = search;
    });
   }

  ngOnInit(): void {
  }

  select(resource: ResultsLocations){
    this.router.navigate([`/resources/character/${resource.id}`]);
  }

}
