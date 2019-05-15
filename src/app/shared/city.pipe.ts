import { Pipe, PipeTransform } from '@angular/core';

export type CityFormat = 'short' | 'long';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: CityFormat): string {
    
    let short: string, long: string;

    switch (value) {
      case 'Hamburg':
        short  = 'HAM';
        long = 'Airport Hamburg Fulsbüttel';
      break;

      case 'Graz':
        short = 'GRZ';
        long = 'Airport Graz';
        break;

      case 'London HR':
        short = 'LHR';
        long = 'London HR';
        break;

      default:
        short = long = value;

    }

    if (fmt === 'short') {
      return short;
    }
    return long;

  }

}
