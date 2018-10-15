   
   import { CoursesService } from './courses.service';
   import { Component } from '@angular/core';
   @Component({
       selector:'courses',
       template: `
       <h2>{{ title }}</h2>
       <ul>
       <li *ngFor="let course of courses">
       {{ course }}
       </li>
       </ul>
       <div (click)="onDivClicked()">
       <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'btn' : 'white' " [class.active]="isActive" (click)="onSave($event)">Save</button>
       </div> <br>
       <div> Enter value:
       <input #email (keyup.enter)="onkeyup(email.value)"><br><br>
       Email:<input [(ngModel)]="myemail" (keyup.enter)="myemail = $event.target.value; onemailup()"> 
       </div> 
       <div>
       {{ pipes.title | uppercase | lowercase}}<br>
       {{ pipes.rating | number:'2.1-1'}}<br>
       {{ pipes.student | number }}<br>
       {{ pipes.price | currency }}<br>
       {{ pipes.releaseDate | date:'shortdate' }}<br>
        <div> 
        {{  text | summary:20 }}<br>
        <span
        class="glyphicon"
        [class.glyphicon-star]="isFavourite"
        [class.glyphicon-star-empty]="!isFavourite"
        
        [ngClass]="{
            'glyphicon-star' : isFavourite,
            'glyphicon-star-empty' : !isFavourite
        }"(click)="onclick()"
        ></span><br>
       <span>{{task.assignee?.name}}</span>
       ` 
    })

   export class CoursesComponent{
    task ={
title:'Review Application',
assignee:null

    }
       isFavourite: boolean;
       onclick(){
           this.isFavourite = !this.isFavourite;
       }
        title = "List of course";
        courses;
        text = `Angular 4 is a JavaScript framework for building web applications and apps in JavaScript, html, and TypeScript, which is a superset of JavaScript. Angular provides built-in features for animation, http service, and materials which in turn has features such as auto-complete, navigation, toolbar, menus, etc. The code is written in TypeScript, which compiles to JavaScript and displays the same in the browser.`;
        pipes ={
            title: "This is complete",
            rating: "4.9745",
            student:"30524",
            price: "192.98",
            releaseDate: new Date(2016,3,1)
        }
        isActive = true;
        myemail = "tarun@gmail.com";
        onemailup(){
            console.log(this.myemail);
        }
        onDivClicked(){
            console.log('Clicked on div');
        }
        onSave($event){
            $event.stopPropagation();
            console.log('Button was clicked',$event);
        }
        onkeyup(email){
        console.log(email);
        }
      constructor(service: CoursesService){
            this.courses = service.getCourses(); 
        }
    }