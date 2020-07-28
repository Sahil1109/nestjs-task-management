import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }
  // Way 1
  //   @Post()
  //   createTasks(@Body() body) {
  //     console.log('body', body);
  //   }

  // Way 2
  @Post()
  createTasks(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    console.log('title', title);
    console.log('title', description);
    return this.taskService.createTasks(title, description);
  }
}
