import { Component, OnInit } from '@angular/core';

import { VideoService } from './video.service';
import { Video } from './video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Video App!';
  videos: Video[] = [];

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videos = [
      new Video(),
      new Video()
    ]
    //this.videoService.getVideos()
    //  .then(videos => this.videos = videos.slice(1, 5));
  }
}