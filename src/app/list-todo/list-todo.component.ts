import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../Models';

@Component({
  selector: 'app-list-todo',
  standalone: false,
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.css'
})
export class ListTodoComponent implements OnInit{
  todos:Todo[]=[];
  constructor (private service:TodoService){
     // console.log("c'est le constructeur")
    }

  ngOnInit(): void {
    this.service.getTodos().subscribe(
      (data)=>
      {
        this.todos=data;
        //console.log(this.employers)
      }
    );
  }

}
