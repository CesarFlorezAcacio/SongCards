import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'SongCards';
  songs: any[] = [];

  constructor(private _song: AppService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs() {
    this._song.getSongs().subscribe(res => {
      this.songs = res.sort(() => Math.random() - 0.5);
    });

  }

}
