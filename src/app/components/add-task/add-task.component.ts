import { Component, OnInit } from '@angular/core';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  title:string = "Nueva";
  faBarsProgress = faBarsProgress;

  constructor() { }

  ngOnInit(): void {
  }

}
