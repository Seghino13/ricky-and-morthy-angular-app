import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Info, Results } from 'src/app/models/resources.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  page: number = 1;
  resource: string = '';
  resourcesResult: Results[] = [];
  info?: Info;
  itemSelected?: Results;
  constructor(private api: ApiService, private router: Router, private modalService: NgbModal) {
    this.resource = router.url.replace('/','')
  }

  ngOnInit(): void {
    this.getDataByResource();
  }

  getDataByResource(){
    this.api.getDataByResource(this.page)
        .subscribe( response =>{
          this.info = response?.info;
          const resource: Results[] = response.results;
          resource.forEach(item=>{
            this.resourcesResult.push(item);
          });
        });
  }

  loadMore(){
    this.page++;
    this.getDataByResource();
  }

  selectItem($event: Results, content:any){
    this.itemSelected = undefined;
    this.itemSelected = $event;
    this.modalService.open(content);
  }
}
