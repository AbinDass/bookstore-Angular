import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toInr'
})
export class ToInrPipe implements PipeTransform {

  transform(value: string): any {
    let val = value.replace('$','')
    let conVal = parseInt(val)
    
     return conVal*82;
    
}

}
