import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef,
    private renderer: Renderer2) {  
    // element.nativeElement.style.backgroundColor = 'green';
    // Render2 -- Extend this base class to implement custom rendering. By default, Angular renders a template into DOM. You can use custom rendering to intercept rendering calls, or to render to something other than DOM.
    this.setBgColor('green')
  }

  setBgColor(color: string) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      color
    )
  }

  //HostListener- Decorator that declares a DOM event to listen for, and provides a handler method to run when that event occurs.
  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('red')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('blue')
  }

 
}
