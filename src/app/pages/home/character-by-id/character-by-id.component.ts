import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Results } from 'src/app/models/resources.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-character-by-id',
  templateUrl: './character-by-id.component.html',
  styleUrls: ['./character-by-id.component.scss']
})
export class CharacterByIdComponent implements OnInit {

  id?: number;
  itemSelected?: Results;
  constructor(private route: ActivatedRoute, private api: ApiService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
     const id = params.get('id') ?? '';
     this.getDataByResource(id);
    })
  }

  getDataByResource(id: string){
    this.api.getDataById(id)
        .subscribe( response =>{
         this.itemSelected = response;
        });
  }

}
