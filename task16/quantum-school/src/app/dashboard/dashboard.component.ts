import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { SorterService } from '../core/sorter.service';
import { ICourse } from '../shared/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private _courses: ICourse[] = [];
  @Input() get courses(): ICourse[]{
    return this._courses;
  }
  set courses(value: ICourse[]){
    if(value){
      this.filteredCourses = this._courses = value;
      this.calculateCourses();
    }
  }
  constructor(private dataService: DataService, private sorterService: SorterService) { }

  filteredCourses: any[] = [];
  coursesTotal!: number;
  ngOnInit() {
    this.dataService.getCourses()
    .subscribe((courses: ICourse[]) => {
      return this.filteredCourses = courses;
    })
  }

  calculateCourses() {
    this.coursesTotal = this.filteredCourses.length;
  }

  // filter(data: string) {
  //   if (data) {
  //       this.filteredCourses = this.courses.filter((cou: ICourse) => {
  //           return cou.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
  //                  cou.subject.name.toLowerCase().indexOf(data.toLowerCase()) > -1
  //       });
  //   } else {
  //       this.filteredCourses = this.courses;
  //   }
  //   this.calculateCourses();
  // }
  sort(event: any) {
    this.sorterService.sort(this.filteredCourses, event.target.value);
  }

}
