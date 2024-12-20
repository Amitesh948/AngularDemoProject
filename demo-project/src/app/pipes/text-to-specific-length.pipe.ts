import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textToSpecificLength'
})
export class TextToSpecificLengthPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if(!value) return'';
    else{
      if(value.length<10){
        return value;
      }
      else{
        return (value.substring(0,9)).concat("...");
      }
    }
  }

}
