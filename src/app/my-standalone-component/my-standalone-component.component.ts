import { Component } from '@angular/core';
import TodoItemsDatas from './todos.json';
import { NgFor } from '@angular/common';
import fs from 'fs';


interface TodoItem {  
  id: number;
  description: String;  
  Status: String;  

}  

@Component({
  selector: 'app-my-standalone-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './my-standalone-component.component.html',
  styleUrl: './my-standalone-component.component.css'
})
export class MyStandaloneComponentComponent {

        TodoItems:TodoItem[]=TodoItemsDatas;
        
        constructor() { }
        ngOnInit() {
        }


  myFunc() {

    var newTask = ((document.getElementById("form1") as HTMLInputElement).value);
    alert("Valor nuevo: "+newTask);
    alert(this.TodoItems.length);
    
    const newItem: TodoItem = { id:this.TodoItems.length+1, description:newTask, Status:"In Progress"  };
    this.TodoItems.push(newItem);
    var jsonTodoItems=JSON.stringify(this.TodoItems);
    alert(jsonTodoItems);

    fs.writeFile('src/app/my-standalone-component/todos.json', jsonTodoItems, (err) => {
      if (err) {
          console.log('Error writing file:', err);
      } else {
          console.log('Successfully wrote file');
      }
      });
  } 


} 

