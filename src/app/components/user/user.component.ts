import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  title = "Users";
  subTitle = "User Test Cases"
  name:String = "Flora";

  userName(){
    return this.name;
  }
}
