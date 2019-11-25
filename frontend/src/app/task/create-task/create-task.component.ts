import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service'

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  createTask = {}

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  create(){
    this.taskService.createTask(this.createTask)
      .subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )
  }

}
