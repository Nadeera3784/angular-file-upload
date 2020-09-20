import { Directive, ElementRef , HostListener, Input} from '@angular/core';

@Directive({

  selector: '[appPaintGreen]'

})

export class PaintGreenDirective {

  @Input('allowed') public option:any;   

  private element:ElementRef;

  constructor(element:ElementRef) {
    this.element = element;
    this.element.nativeElement.style.backgroundColor = 'green';
    //element.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('change', ['$event'])
  public onChange():any {
    let files = this.element.nativeElement;
    //let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0]
    //console.log(files.files[0]);
    console.log(this.option);

  }

}