import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'colloquioapp';

  colors = ["red", "yellow", "blue", "green"];
  color: string = "white";
  tiles: string[] = [];

  ngOnInit(): void {
    for(let i = 3; i>0; i++) {
      let index = Math.random() * i;
      this.tiles = [this.colors[index], ...this.tiles];
      this.colors.splice(index, 1);
    }
    this.tiles = [this.colors[0], ...this.tiles];

  }

  onClick(color: string) {
    this.color = color;
  }
}
