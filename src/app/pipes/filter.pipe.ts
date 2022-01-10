import { Pipe, PipeTransform } from '@angular/core';
import { Pressupost } from '../interfaces/pressupost.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Pressupost[], titulo: string): Pressupost[] {
    if(!value) return [];
    return value.filter( i => i.titulo == titulo);
  }

}
