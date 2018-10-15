import { Directive, HostListener, ElementRef, Input} from '@angular/core';
import { format } from 'util';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
 
@Input('appInputFormat') format;
  constructor(private el: ElementRef) { }

@HostListener('blur') onBlur(){

let value:string = this.el.nativeElement.value;
if(this.format == 'Lowercase')
this.el.nativeElement.value=value.toLowerCase();
else
this.el.nativeElement.value=value.toUpperCase();
}
}
