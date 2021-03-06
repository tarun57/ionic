import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { reject } from 'q';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts : any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http : Http) { 
    let promise = new Promise(function(resolve, reject) {
      resolve("done");
    
      reject(new Error("…")); // ignored
      setTimeout(() => resolve("…")); // ignored
    });
    
    http.get(this.url)
   .subscribe(response =>{
       this.posts = response.json();
        }); 
 }

 

  createPost(input : HTMLInputElement){
 
let post = {title : input.value};
input.value='';
this.http.post(this.url, JSON.stringify(post))
.subscribe(response =>{
  post['id'] = response.json().id;
  this.posts.splice(0,0,post);

}, (error)=>{
  reject(error)
});
}



  updatePost(post){
    this.http.put(this.url + '/' + post.id, JSON.stringify({isRead: true}))
    .subscribe ( response => {
      console.log(response.json());
    });
  }


  deletePost(post){
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response=>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    });
  }

}
