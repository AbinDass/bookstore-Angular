import { Pipe, PipeTransform } from '@angular/core';
import { cart } from '../user/model/cartState';

@Pipe({
  name: 'currencyConvert'
})
export class CurrencyConvertPipe implements PipeTransform {

  transform(value: string, quantity:number): any {
       let val = value.replace('$','')
       let conVal = parseInt(val)
       
        return conVal*82*(quantity as number); 
       
  }

}
