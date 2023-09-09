import { Pipe, PipeTransform } from '@angular/core';
import { ResultEpisodies } from 'src/app/models/resources.interface';

@Pipe({
  name: 'filterEpisodies'
})
export class FilterPipe implements PipeTransform {

  transform(items: ResultEpisodies[], filter: any): ResultEpisodies[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item)=> 
      item.name.toUpperCase().includes(filter.toUpperCase()) 
    );
  }

}
