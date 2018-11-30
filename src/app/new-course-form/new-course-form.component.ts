import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent  {
  newTodo: string;
  todos: any;
  todoObj: any;

  constructor() {
    this.newTodo = '';
    this.todos = [];
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index
    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }


  
form = new FormGroup({
  topics : new FormArray([])
});
 

add(topic){
  (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  topic.value='';
}

removeTopic(topic: FormControl){
  let index = this.topics.controls.indexOf(topic);
  this.topics.removeAt(index);
  }
  

get topics(){
  return this.form.get('topics') as FormArray;  
}


log(x) {console.log(x);}
submit(topic){
  console.log(topic);
}


}
