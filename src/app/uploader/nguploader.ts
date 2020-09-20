import { Directive, ElementRef , HostListener, Input} from '@angular/core';

@Directive({

  selector: '[Nguploader]'

})

export class Nguploader {

  @Input('allowed') public allowed_file_types:any;   

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
    //console.log(this.allowed_file_types);
    //console.log(files.files[0]);

    if (this.allowed_file_types instanceof Array) {
       console.log(this.allowed_file_types);
    }

  }

}