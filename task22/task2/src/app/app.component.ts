import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeOut', [
      state('initial', style({
        display: 'block',
        opacity : 1
      })),
      state('final', style({
        display: 'none',
        opacity : 0
      })),
      transition('* => *', [animate('900ms')]),

      state('changed', style({
        display: 'block',
        opacity : 1
      })),
      state('notchanged', style({
        display: 'none',
        opacity : 0
      })),
      transition('* => *', [animate('900ms')]),
    ]),
  ]
})
export class AppComponent {

  title = 'task2';
  color = '';
  changed = false;
  hover1=false;
  hover2=false;

  getColor(){
    return this.color;
  }

  setColor(e:any){
    this.color = e.target.value;
    this.changed = this.changed?!this.changed:this.changed;
  }
}
