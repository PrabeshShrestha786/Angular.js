import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true
})
export class TextColorDirective {

  @Input('appTextColor') color!: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'color',
      this.color
    );
  }
}
