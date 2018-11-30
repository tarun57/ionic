import { Component , ViewEncapsulation ,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {


  ViewMode = 'Something Else';
  course = [1,2 ];


  title = 'Angular App';
  
  tweet={
    body: '...',
    likescount: 10,
    isliked: true
  }

  courses =[
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
     ];
     
     Add(){
       this.courses.push({id: 4, name:'course4'});
     }
     Remove(course){
       let index= this.course.indexOf(course);
       this.courses.splice(index ,1);
     }
     onChange(course){
      course.name = 'updated';
     }
     Load(){
       this.courses=[
        {id: 1, name: 'course1'},
        {id: 2, name: 'course2'},
        {id: 3, name: 'course3'},
       ];
     }

     
}
