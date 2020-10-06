import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../store/actions';
import { ITodo } from '../store/itodo';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css'],
})
export class CropperComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  @select() todos;

  model: ITodo = {
    id: 0,
    description: "",
    image : "",
    priority: "image",
    isCompleted: false 
  };
  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit(){

  }

  fileChangeEvent(event: any){
    console.log("fileChangeEvent"+event);
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      console.log("imageCropped"+event);
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

  makeImage(){
    console.log('get image' + this.croppedImage);
    this.model.image = this.croppedImage;
  }

  obSubmit() {
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
    this.model.description = "";
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id });
  }

  // get incompleteTodos(): Array<Todo> {
  //   return this.todoDataService.getIncompleteTodos();
  // }

  // get completeTodos(): Array<Todo> {
    
  //   return this.todoDataService.getCompleteTodos();
  // }

}
