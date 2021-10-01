import { TodosService } from './../../services/todos.service';
import { TodosResponseModel } from './../../models/todosResponseModel';
import { Todos } from './../../models/todos';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

 
  todo1:Todos={
    userId : 1,
    id : 2,
    title : "Alii",
    completed : true
  };
  todos:Todos[]=[];
  dataLoaded = false;
 
  constructor(private todosService:TodosService) {}

  ngOnInit(): void {
    this.getProducts();
    // console.log(this.todos);
  }

  getProducts(){
    this.todosService.getTodos().subscribe(response=>{
      this.todos = response
      this.dataLoaded = true;
    })
  }

}
