import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleCollapseSiblings]'
})
export class ToggleCollapseSiblingsDirective {

  constructor(elementRef: ElementRef) {
  }

  @HostListener('click', ['$event']) onclick($event) {
    const allButCaption = $event.target.parentElement.querySelectorAll('li:not(.caption)');
    let counter = 0;

    allButCaption.forEach(element => {
      const classes = element.classList;

      setTimeout(() => {
        if(classes.contains('collapse')) {
          classes.remove('collapse');
        } else {
          classes.add('collapse');
        }
      }, ++counter * 50);

    });
  }
}
