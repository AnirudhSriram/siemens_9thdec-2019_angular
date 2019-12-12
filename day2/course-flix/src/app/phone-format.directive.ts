import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneFormat]'
})
export class PhoneFormatDirective {

  constructor(private element : ElementRef) {
      console.log('Phone directive',element)
      
   }

   @HostListener('blur')
   formatPhoneNumber = ()=> {
    this.element.nativeElement.value = `+91 - ${this.element.nativeElement.value}`
   }

}
