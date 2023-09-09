import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Episodies, Locations, Resources, Results } from 'src/app/models/resources.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDataByResource(page: number = 1){
    return this.http.get<Resources>(`${environment.API}/character?page=${page}`);
  }

  getDataById(id: string){
    return this.http.get<Results>(`${environment.API}/character/${id}`);
  }

  getDataByLocation(page: number = 1){
    return this.http.get<Locations>(`${environment.API}/location?page=${page}`);
  }

  getDataByEpisode(page: number = 1){
    return this.http.get<Episodies>(`${environment.API}/episode?page=${page}`);
  }
}
