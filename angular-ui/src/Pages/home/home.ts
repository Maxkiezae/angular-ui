import { Component } from '@angular/core';
import { AllEpisodeList } from "../all-episode-list/all-episode-list";

@Component({
  selector: 'app-home',
  imports: [AllEpisodeList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
