import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

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
    @Body() createTaskDto:CreateTaskDto
  ) {
    return this.taskService.createTasks(createTaskDto);
  }
}
