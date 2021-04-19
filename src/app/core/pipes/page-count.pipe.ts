import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageCount', pure: false
})
export class PageCountPipe implements PipeTransform {

  transform(listselection:any): any {

    return listselection.map(t=> {
        return {
            item: t,
            parent:listselection.lenght
        }
    });
}
  }


