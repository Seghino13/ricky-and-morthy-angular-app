import { Pipe, PipeTransform } from '@angular/core';
import { ResultsLocations } from 'src/app/models/resources.interface';

@Pipe({
  name: 'filterLocation'
})
export class FilterPipe implements PipeTransform {

  transform(items: ResultsLocations[], filter: any): ResultsLocations[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item)=> 
      item.name.toUpperCase().includes(filter.toUpperCase()) 
    );
  }

}
