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
      transition('* => *', animate('2000ms ease-out')),
    ]),
  ]
})
export class AppComponent {

  @Input() currentState? : string;

  title = 'task2';
  color = '';
  changeColor(e:any){
    var color = e.target.value;
    const final = document.querySelector('.final') as HTMLParagraphElement;
    const highlights:NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.highlights');
    for (let i = 0; i < highlights.length; i++){
      highlights[i].addEventListener('mouseover', ()=>{
        highlights[i].style.backgroundColor = color;
        console.log(color);
      });
      highlights[i].addEventListener('mouseout', ()=>{
        highlights[i].style.backgroundColor = "white";
      });
    }
    final.style.color = color;
    this.color = color;
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
