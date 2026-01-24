import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
  standalone: true
})
export class FontSizeDirective {

  @Input('appFontSize') fontSize!: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'font-size',
      this.fontSize
    );
  }
}
