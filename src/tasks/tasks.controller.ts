import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post('/create')
  createTask(@Body() newTask: CreateTaskDto) {
    this.tasksService.createTask(newTask.title, newTask.description);
    return 'saved';
  }

  @Put('/update/:id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    this.tasksService.updateTask(id, updatedFields);
    return 'updated';
  }

  @Delete('/delete/:id')
  deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
    console.log(this.tasksService.getAllTasks());
    return 'deleted';
  }
}
