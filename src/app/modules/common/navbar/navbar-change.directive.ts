import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[navbarChange]',
})
export class NavbarChangeDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('window:scroll', ['$event']) scrolling(event: any) {
    if (window.pageYOffset === 0) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'navbar-shrink');
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, 'navbar-shrink');
    }
  }
}
