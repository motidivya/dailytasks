import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  userModel = new User('', '', 0, '', '', true);

  constructor(){}

  validateTopic(value: string){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }

  onSubmit(){
    // console.log(this.userModel)
    // this._enrollmentService.enroll(this.userModel).subscribe(data => console.log('success', data), error => console.error('Error', error));
    var retrievedObject = JSON.parse(localStorage.getItem("Users") || '{}');
    if(retrievedObject != JSON.parse('{}')){
      retrievedObject
    }else{
      localStorage.setItem('Users',JSON.stringify(this.userModel));
    }
    
    
  }

}
