import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  images: string[] = [
    '../../../assets/images/authorImage.jpg',
    '../../../assets/images/webPoster.jpg',
    '../../../assets/images/blogpostPoster.jpg'
  ];
}
