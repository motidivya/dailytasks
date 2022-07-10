import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quantum-school';
  is_logged_in!: boolean;

  ngOnInit(){
    this.is_logged_in = false;
  }
}
