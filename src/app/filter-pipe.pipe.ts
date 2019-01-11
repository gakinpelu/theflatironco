import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(item: any[], searchText: string): string[] {
    console.log(searchText);
    if(!item) return [];
    if(!searchText) return item;

    searchText = searchText.toLocaleLowerCase();

    return item.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText) ||
      it.username.toLocaleLowerCase().includes(searchText);
    });
  }

}
