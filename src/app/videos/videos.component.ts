import { Component } from '@angular/core';
import { SafeUrlPipe } from './safe-url.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videos',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  videos: string[] = [
    'https://www.youtube.com/embed/xEiny1zLTQk?start=52',
    'https://www.youtube.com/embed/2Vv-BfVoq4g',
    'https://www.youtube.com/embed/3fumBcKC6RE',
    'https://www.youtube.com/embed/4UZrsTqkcW4',
    'https://www.youtube.com/embed/5qap5aO4i9A',
    'https://www.youtube.com/embed/6Dh-RL__uN4',
    'https://www.youtube.com/embed/7QUtEmBT_-w',
    'https://www.youtube.com/embed/8UVNT4wvIGY',
    'https://www.youtube.com/embed/9bZkp7q19f0',
    'https://www.youtube.com/embed/10Vb7J6pS2k',
    'https://www.youtube.com/embed/11Vb7J6pS2k',
    'https://www.youtube.com/embed/12Vb7J6pS2k',
    'https://www.youtube.com/embed/13Vb7J6pS2k',
    'https://www.youtube.com/embed/14Vb7J6pS2k',
    'https://www.youtube.com/embed/15Vb7J6pS2k'
  ];
  page = 1;
  pageSize = 10;

  get pagedVideos() {
    const start = (this.page - 1) * this.pageSize;
    return this.videos.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.videos.length / this.pageSize);
  }

  setPage(p: number) {
    if (p >= 1 && p <= this.totalPages) this.page = p;
  }
  nextPage() { this.setPage(this.page + 1); }
  prevPage() { this.setPage(this.page - 1); }
}
