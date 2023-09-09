import { Pipe, PipeTransform } from '@angular/core';
import { Results } from 'src/app/models/resources.interface';

@Pipe({
  name: 'filterResource'
})
export class FilterPipe implements PipeTransform {

  transform(items: Results[], filter: any): Results[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item)=> 
      item.name.toUpperCase().includes(filter.toUpperCase()) 
    );
  }

}
