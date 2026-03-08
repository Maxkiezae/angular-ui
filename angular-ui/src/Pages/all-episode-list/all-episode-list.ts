import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-episode-list',
  imports: [],
  templateUrl: './all-episode-list.html',
  styleUrl: './all-episode-list.scss',
})
export class AllEpisodeList {
  title:string;

  constructor(private router: Router){
    this.title = "All Epsiode List"
  }

  goToEpisode(path: string): void {
    this.router.navigate([path]);
  }
}
