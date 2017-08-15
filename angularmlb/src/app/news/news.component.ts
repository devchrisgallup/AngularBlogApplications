import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { YoutubeService } from 'app/services/youtube.service'; 

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public video; 
  public videoUrlArray = ["https://www.youtube.com/embed/YC4K-mikkj4?ecver=1"]; 

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.youtubeService.getData()
                  .forEach(data => this.video = data.items);
  }

  ngAfterContentChecked() {
    this.getVideos();
  }

  getVideos() {
    for (let i = 0; i < this.video.length; i++) {
      if (this.video[i].id.videoId !== undefined) {
        this.videoUrlArray[i] = "https://www.youtube.com/embed/" + this.video[i].id.videoId + "?ecver=1"
      }
    }
    console.log(this.videoUrlArray); 
  }

}
