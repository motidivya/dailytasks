import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // trigger('')
  ]
})

export class AppComponent implements OnInit {
  todo:string[] = ['A', 'B', 'C'];
  timeToExit: boolean= false;
  done:string[] = [];
  doneCount:number = 0;
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  elementClicked(event:any){
    var styledElement = event.target.style;
    if(styledElement.color !=='green'){
      styledElement.color = 'green';
    }
    else if(styledElement.color === 'green'){
      styledElement.color = 'black';
    }
    if(styledElement.fontSize !== '30px'){
      styledElement.fontSize = '30px';
    }
    else if(styledElement.fontSize === '30px'){
      styledElement.fontSize = '16px';
    }
  }

  // entered(event:CdkDragEnter<string[]>){
  //   this.doneCount+= 1;
  //   console.log('TEntered - here are', this.doneCount,  event.item.data, 'in the basket.')
  //   if(this.doneCount === 3){
  //     this.timeToExit= true;
  //   }
  // }

  // exited(event:CdkDragExit<string[]>){
  //   this.doneCount-= 1;
  //   console.log('Exited - There are', this.doneCount, event.item.data, 'in the basket.')
  //   if(this.doneCount === 3){
  //     this.timeToExit= true;
  //   }
  // }

  entered(event: CdkDragEnter<string[]>) {
    console.log('Entered', event.item.data);
   }
   
   exited(event: CdkDragExit<string[]>) {
     console.log('Exited', event.item.data);
   }
  
  ngOnInit(): void {
  }
}
