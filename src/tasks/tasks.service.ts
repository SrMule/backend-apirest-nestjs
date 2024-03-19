import { Injectable } from '@nestjs/common';
import { Task, taskStatus } from './task.entity';
import { UpdateTaskDto } from './dto/task.dto';

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
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
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
  updateTask(id: string, updatedFields: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updatedFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
