import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  music: HTMLAudioElement | undefined;

  ngOnInit(): void {
    this.music = document.getElementById('background-music') as HTMLAudioElement;
  }

  toggleMusic(): void {
    if (this.music) {
      if (this.music.paused) {
        this.music.play();
      } else {
        this.music.pause();
      }
    }
  }
}