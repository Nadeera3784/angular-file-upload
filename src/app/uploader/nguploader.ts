import { Directive, ElementRef , HostListener, Input} from '@angular/core';

export interface FileUploaderOptions {
  //url?:string;
  element?:any;
}

@Directive({

  selector: '[Nguploader]'

})

export class Nguploader {

  public options:FileUploaderOptions = {
    element : ElementRef
  };

  @Input('allowed') public allowed_file_types:any;   

  //private element:ElementRef;


  constructor(options:any) {
    //this.element = element;
    this.setOptions(options);
  }

  @HostListener('change', ['$event'])
  public onChange():any {
    // let files = this.options.element.nativeElement;
    // //let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0]
    // //console.log(files.files[0]);
    // //console.log(this.allowed_file_types);
    // //console.log(files.files[0]);

    // if (this.allowed_file_types instanceof Array) {
    //   if(this.allowed_file_types.includes(files.files[0].type)){
    //       alert('go');
    //   }else{
    //     let templateElement = document.createElement("div");
    //     templateElement.style.color = 'red';
    //     templateElement.id = "error";
    //     let txt = document.createTextNode("This file type is not supported");
    //     templateElement.appendChild(txt);
    //     this.options.element.nativeElement.after(templateElement);
    //   }

    // }

  }

  public setOptions(options:any):void {
    this.options = Object.assign(this.options, options);
  }

}