
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

// export class PostListComponent implements OnInit {
//   posts: any[] = [];

//   constructor(private postService: PostService) { }

//   ngOnInit(): void {
//     this.loadPosts();
//   }

//   loadPosts(): void {
//     this.postService.getPosts().subscribe(posts => {
//       this.posts = posts;
//     });
//   }
// }
export class PostListComponent implements OnInit {
  posts: any[] = [];
  apiUrl = "https://localhost:7185/api/posts";

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  editPost(post: any): void {
    // Navigate to edit page with post ID
    this.router.navigate(['/edit', post.id]);
  }

  deletePost(postId: number): void {
    if (confirm('Are you sure you want to delete this post?')) {
      this.postService.deletePost(postId).subscribe(() => {
        this.loadPosts(); // Reload posts after deletion
      });
    }
  }
}