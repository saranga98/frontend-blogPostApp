import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  postForm: FormGroup;
  postId: number;
  selectedFile: File | null = null;
  currentImagePath: string | null = null;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.postId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.postService.getPost(this.postId).subscribe(post => {
      this.postForm.patchValue({
        title: post.title,
        author: post.author,
        description: post.description
      });
      this.currentImagePath = post.imagePath ? `https://localhost:7185${post.imagePath}` : null;
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const fileToUpload = this.selectedFile ? this.selectedFile : undefined;
      this.postService.updatePost(this.postId, this.postForm.value, fileToUpload).subscribe(() => {
        this.router.navigate(['/posts']);
      });
    }
  }
}
