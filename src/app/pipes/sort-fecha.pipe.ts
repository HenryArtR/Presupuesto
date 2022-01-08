import { Pipe, PipeTransform } from '@angular/core';
import { Pressupost } from '../interfaces/pressupost.interface';

@Pipe({
  name: 'sortFecha'
})
export class SortFechaPipe implements PipeTransform {

  transform(value: Pressupost[]): Pressupost[] {
    if (!value) return [];
    return value.sort((a,b) => {
      if( a.data < b.data){
        return -1
      }
      if( a.data > b.data){
        return 1
      }
      return 0;
    })
  }

}
