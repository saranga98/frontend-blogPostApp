import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      const loginData = {
        email: formValue.email,
        password: formValue.password
      };

      this.http.post('https://localhost:7185/api/User/login', loginData).subscribe(
        (response: any) => {
          // Handle successful login, navigate based on userType
          if (response.userType === 'admin') {
            this.router.navigate(['/admin-panel']);
          } else {
            this.router.navigate(['/user-dashboard']);
          }
        },
        (error) => {
          console.error(error);
          // Handle login error
        }
      );
    }
  }
}