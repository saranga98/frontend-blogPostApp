import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.loadPosts();
  }
  truncateTitle(title: string): string {
    return title.length > 40 ? `${title.slice(0, 40)}...` : title;
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log('posts', posts);
    });
  }

  viewPost(postId: number): void {
    this.router.navigate([`/blog-post/${postId}`]);
  }
}