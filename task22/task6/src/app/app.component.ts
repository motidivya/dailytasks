import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { rubberBandAnimation } from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    rubberBandAnimation()
  ]
})
export class AppComponent implements OnInit {
  title = 'task6';
  constructor(){}

  ngOnInit(): void {
    
  }
}
