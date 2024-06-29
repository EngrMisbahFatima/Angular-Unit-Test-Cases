import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

@Input() post:Post | null = null;
@Output() delete = new EventEmitter<void>();

constructor(){}

 deletePost(event: Event){
  event.stopPropagation();
  this.delete.emit();
 }
}
