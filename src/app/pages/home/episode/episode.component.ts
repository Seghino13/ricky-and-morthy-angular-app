import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Info, ResultEpisodies } from 'src/app/models/resources.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  page: number = 1;
  resource: string = '';
  resourcesResult: ResultEpisodies[] = [];
  info?: Info;
  itemSelected?: ResultEpisodies;
  constructor(private api: ApiService, private router: Router) {
    this.resource = router.url.replace('/','')
  }

  ngOnInit(): void {
    this.getDataByResource();
  }

  getDataByResource(){
    this.api.getDataByEpisode(this.page)
        .subscribe( response =>{
          this.info = response?.info;
          const resource: ResultEpisodies[] = response.results;
          resource.forEach(item=>{
            this.resourcesResult.push(item);
          });
        });
  }

  loadMore(){
    this.page++;
    this.getDataByResource();
  }

  selectItem($event: ResultEpisodies){
    this.itemSelected = undefined;
    this.itemSelected = $event;

  }

}
