import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @HostBinding('style.textDecoration') textDecoration: string | undefined;

    @HostListener('mouseenter') onMouseEnter() {
      this.textDecoration = 'underline';
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.textDecoration = 'none';
    }
  }



