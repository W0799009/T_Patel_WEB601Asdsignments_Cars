import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentType'
})
export class ContentTypePipe implements PipeTransform {
  transform(contents: Content[], type?: string): Content[] {
    if (type) {
      // If a type is provided, filter contents based on the provided type
      return contents.filter(content => content.type === type);
    } else {
      // Otherwise, return all contents with no type set
      return contents.filter(content => !content.type);
    }
  }
}

