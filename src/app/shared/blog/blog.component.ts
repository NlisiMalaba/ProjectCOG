import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogData = [
    {
      image: 'assets/images/blog/1.jpg',
      title: 'Title for article 1',
      text: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
      image: 'assets/images/blog/2.jpg',
      title: 'Title for article 2',
      text: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
      image: 'assets/images/blog/3.jpg',
      title: 'Title for article 3',
      text: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
  ]
}
