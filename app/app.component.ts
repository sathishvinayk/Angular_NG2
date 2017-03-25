import {Component} from "@angular/core";
import {Model,TodoItem} from "./model";

@Component({
  selector: "todo-app",
  templateUrl:"app/app.component.html"
})
export class AppComponent{
  model=new Model();

  getName(){
    return this.model.user;
  }
  getTodoItems(){
    return this.model.items;
  }
}
