import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  myfirstname:string;
  myemail:string;
  public tests = [];
constructor(){
  this.myfirstname='';
  this.myemail='';
}
ngOnInit() {
  this.getPost();
}
createPost(){
  let user = {myfirstname: this.myfirstname, myemail: this.myemail};
  this.tests.push(user);
      localStorage.setItem('user', JSON.stringify(this.tests));
      this.myfirstname='';
      this.myemail='';
    }

 getPost(){
  let promise =   new Promise((resolve, reject) => {
    setTimeout(() => resolve(JSON.parse(localStorage.getItem('user'))), 1000);
  });
  
  promise.then((value: Array<any>) => {
    if(value) {
      this.tests = value;
    }
  });
} 



  removePost(test){
    let index = this.tests.indexOf(test);
    this.tests.splice(index,1);
    localStorage.setItem('user', JSON.stringify(this.tests));
 }
}
