import { NgClass } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../core/models/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, NgClass, TaskCardComponent, ButtonComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  title = input('Lista de tarefas');

  taskCreated = output<Task>();

  showList: boolean = true;

  tasks: Task[] = [];

  constructor() {
    console.log('Loaded!');
  

  }
  ngOnInit(): void {
    console.log('Init!');
  }

  helloWorld() {
    console.log('Hello, World!');
  }

  addTask(title: string) {
    const newTask = { title, done: false };
    
    this.tasks.push(newTask);
    this.taskCreated.emit(newTask);
  }
}
