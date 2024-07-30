import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { Post } from '../../models/post.model';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.scss']
})
// export class BlogPostPageComponent implements OnInit {
//   post: Post | undefined;

//   constructor(
//     private route: ActivatedRoute,
//     private postService: PostService
//   ) { }

//   ngOnInit(): void {
//     const id = +this.route.snapshot.paramMap.get('id')!;
//     this.postService.getPostById(id).subscribe((post: Post) => {
//       this.post = post;
//       console.log('post', post);
//     });
//   }
// }

export class BlogPostPageComponent implements OnInit {
  post: Post | undefined;
  comments: Comment[] = [];
  newComment: Comment = { postId: 0, name: '', content: '' };

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.newComment.postId = id;
    this.postService.getPostById(id).subscribe((post: Post) => {
      this.post = post;
      this.loadComments(id);
    });
  }

  loadComments(postId: number) {
    this.commentService.getComments(postId).subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }

  addComment() {
    if (this.newComment.name && this.newComment.content) {
      this.commentService.postComment(this.newComment.postId, this.newComment).subscribe((comment: Comment) => {
        this.comments.push(comment);
        this.newComment.name = '';
        this.newComment.content = '';
      });
    }
  }
}