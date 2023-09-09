import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Info, ResultsLocations } from 'src/app/models/resources.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  page: number = 1;
  resource: string = '';
  resourcesResult: ResultsLocations[] = [];
  info?: Info;
  itemSelected?: ResultsLocations;
  constructor(private api: ApiService, private router: Router) {
    this.resource = router.url.replace('/','')
  }

  ngOnInit(): void {
    this.getDataByResource();
  }

  getDataByResource(){
    this.api.getDataByLocation(this.page)
        .subscribe( response =>{
          this.info = response?.info;
          const resource: ResultsLocations[] = response.results;
          resource.forEach(item=>{
            this.resourcesResult.push(item);
          });
        });
  }

  loadMore(){
    this.page++;
    this.getDataByResource();
  }

  selectItem($event: ResultsLocations){
    this.itemSelected = undefined;
    this.itemSelected = $event;

  }

}
