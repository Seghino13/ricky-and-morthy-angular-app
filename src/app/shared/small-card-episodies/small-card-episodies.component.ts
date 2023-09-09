import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ResultEpisodies } from 'src/app/models/resources.interface';
import { EmitSearchService } from 'src/app/services/emit-search/emit-search.service';

@Component({
  selector: 'app-small-card-episodies',
  templateUrl: './small-card-episodies.component.html',
  styleUrls: ['./small-card-episodies.component.scss']
})
export class SmallCardEpisodiesComponent implements OnInit {

  @Input() resources?: ResultEpisodies[];
  @Output() selectItem = new EventEmitter<ResultEpisodies>();
  search: string = '';
  constructor(private emitSearchService:EmitSearchService, private router: Router) {
    this.emitSearchService.search.subscribe(search=>{
      this.search = search;
    });
   }

  ngOnInit(): void {
  }

  select(resource: ResultEpisodies){
    this.router.navigate([`/resources/character/${resource.id}`]);
  }

}
