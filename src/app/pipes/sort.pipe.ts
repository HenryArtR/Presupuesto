import { Pipe, PipeTransform } from '@angular/core';
import { Pressupost } from '../interfaces/pressupost.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Pressupost[]): Pressupost[] {
    if (!value) return [];
    return value.sort((a,b) => {
      if( a.titulo < b.titulo){
        return -1
      }
      if( a.titulo > b.titulo){
        return 1
      }
      return 0;
    })
   
  }

}
