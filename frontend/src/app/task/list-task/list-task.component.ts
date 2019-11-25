import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service'

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks = [] 

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(
        res=>{
          this.tasks = res
        },
        err=> console.log(err)
      )
  }

  changeStatus(selectTask, status){
    this.taskService.editTask(selectTask)
      .subscribe(
        res=>{
          console.log(res)
          selectTask.status = status
        },
        err=>console.log(err)
      )
  }
  delete(deleteTask){

  }

}
