import { Component } from '@angular/core';

@Component({
  selector: 'app-ep-1',
  imports: [],
  templateUrl: './ep-1.html',
  styleUrl: './ep-1.scss',
})
export class Ep1 {
  title:string
  constructor(){
    this.title = 'Episode 1 '
  }
}
