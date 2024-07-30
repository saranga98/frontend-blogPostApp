import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private uploadService: UploadService,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });
  }

  ngOnInit(): void { }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit(): void {
    if (this.postForm.valid && this.selectedFile) {
      this.uploadService.uploadPost(this.postForm.value, this.selectedFile).subscribe(() => {
        this.router.navigate(['/admin-panel']);
      });
    }
  }
}