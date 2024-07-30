import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogPostPageComponent } from './components/blog-post-page/blog-post-page.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-dashboard-ex', component: UserPanelComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'create', component: PostFormComponent },
  { path: 'edit/:id', component: EditPostComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog-post/:id', component: BlogPostPageComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
