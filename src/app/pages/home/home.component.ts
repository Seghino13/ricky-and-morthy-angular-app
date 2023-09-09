import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { EmitSearchService } from 'src/app/services/emit-search/emit-search.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  resoucesItems: string[] = environment.resoucesItems; 
  searchResource: string = '';
  constructor(private router: Router, private emitSearchService:EmitSearchService) { }

  ngOnInit(){}

  changeResource(resource:string){
    this.router.navigate([`/resources/${resource}`]);
  }

  search(){
    this.emitSearchService.search.emit(this.searchResource);
  }

}
