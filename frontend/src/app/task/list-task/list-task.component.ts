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
    const temporalStatus = selectTask.status
    selectTask.status = status
    this.taskService.editTask(selectTask)
      .subscribe(
        res=>{
          selectTask.status = status
        },
        err=>{
          console.log(err)
          selectTask.status = temporalStatus
        }
      )
  }
  delete(deleteTask){
    this.taskService.deleteTask(deleteTask)
      .subscribe(
        res=>{
          const index = this.tasks.indexOf(deleteTask)
          if(index>-1){
            this.tasks.splice(index,1)
          }
        },
        err=>console.log(err)
      )
  }

}
