import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../Models';

@Component({
  selector: 'app-list-posts',
  standalone: false,
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent implements OnInit{
  posts:Post[]=[];
  constructor (private service:PostService){
     // console.log("c'est le constructeur")
    }

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      (data)=>
      {
        this.posts=data;
        //console.log(this.employers)
      }
    );
  }

}
