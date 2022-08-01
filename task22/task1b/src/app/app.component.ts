import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task1b';
  table = {
    "heading": "Traditional Mathematics Topic",
    "data": ["Number line", "Counting", "Subtraction as Comparision", "Rate", "Place value", "Ordering numbers", "Time (duration)", "Length (distance)"]
  }
}
