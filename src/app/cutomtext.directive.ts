import { Directive ,Renderer2,ElementRef} from '@angular/core';

@Directive({
  selector: '[appCutomtext]'
})
export class CutomtextDirective {

  constructor(private el:ElementRef,private renderer2:Renderer2) {

    renderer2.setStyle(el.nativeElement,'background-color','red');
   }

}
