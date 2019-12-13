import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingPipe'
})
export class RatingPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log("inside",value);
    return `<i class="fa fa-star" aria-hidden="true"></i>`
  }

}
