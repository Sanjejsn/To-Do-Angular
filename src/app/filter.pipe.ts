import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from './task';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(array: ITask[], status) {

    switch (status) {
      case 'all':
        return array;
      case 'started':
        return array.filter(task => !task.completed);
      case 'completed':
        return array.filter(task => task.completed);

      default:
        return array;
    }
  }

}


