import { Injectable } from '@nestjs/common';
import { Task, taskStatus } from './task.entity';

@Injectable()
export class TasksService {
  //DB
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'some task',
      status: taskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task = {
      id: (this.tasks.length + 1).toString(),
      title,
      description,
      status: taskStatus.PENDING,
    };
    this.tasks.push(task);
  }
  updateTask() {}
  deleteTask() {}
}
