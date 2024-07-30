# BlogSiteFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Features

- **Responsive Design:** Optimized for various screen sizes using PrimeFlex.
- **CRUD Operations:** Create, read, update, and delete blog posts.
- **Image Upload:** Upload images for blog posts with preview functionality.
- **PrimeNG Components:** Utilizes a variety of PrimeNG components for a modern UI.
- **Routing:** Efficient navigation between different views.
- **Form Validation:** Ensures user inputs are valid before submission.

## Technologies Used

- **Angular:** Core framework for building the application.
- **PrimeNG:** UI components for a rich user interface.
- **PrimeFlex:** CSS utilities for responsive design.
- **PrimeIcons:** Icons for enhancing the visual appeal.
- **Vercel:** Hosting the frontend for high availability.

- ## Getting Started

### Prerequisites

- Node.js
- Angular CLI

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/blog-post-app-frontend.git
    cd blog-post-app-frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    ng serve
    ```

The application will start and be accessible at `http://localhost:4200`.

## Project Structure

- **src/app:** Contains the core application files.
  - **components:** Angular components for different views.
  - **services:** Services for API calls and data management.
  - **models:** Interfaces and models for data structures.
  - **styles:** Global and component-specific SCSS files.

## Key Components

- **NavbarComponent:** Navigation bar for the application.
- **HomeComponent:** Displays a welcome message and a grid of blog posts.
- **PostDetailComponent:** Displays detailed view of a single blog post.
- **CreatePostComponent:** Form for creating a new blog post.
- **EditPostComponent:** Form for editing an existing blog post.
- **AboutComponent:** Information about the blog or author.
- **ContactComponent:** Contact form for user inquiries.

## API Integration

The frontend communicates with the backend through HTTP requests. The base URL for the backend API should be configured in the environment files.

