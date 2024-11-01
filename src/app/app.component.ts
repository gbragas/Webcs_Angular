import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Task } from './core/models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title: string = 'Todo List';
  welcomeMsg: string = 'Olá pessoal,  como estão?';
  showList: boolean = true;
  numList: number[] = [1, 2, 3, 4, 5];
  namesList: string[] = ['João', 'Maria', 'José', 'Pedro'];

  tasks: Task[] = [
    { title: 'Estudar Angular', done: false },
    { title: 'Estudar React', done: true },
    { title: 'Estudar Vue', done: false },
    { title: "test", done: false, daysLeft: 1 }
  ];

  constructor() {
    console.log('Loaded!');
  

  }
  ngOnInit(): void {
    console.log('Init!');
  }

  helloWorld() {
    console.log('Hello, World!');
  }

  updateTitle(title: string) {
    this.title = title;
  }

  addTask() {
    this.tasks.push({ title: "test", done: false });
    this.tasks.push({ title: "test", done: false, daysLeft: 5 });
  }
}
