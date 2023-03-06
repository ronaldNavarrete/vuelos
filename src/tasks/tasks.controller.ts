import { Controller, Delete, Get, Post, Put, Body, Param, Req, Res } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';

import { Task } from "./interfaces/Task";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    @Get()
    getTasks(): Promise<Task[]> {
        return this.taskService.obtenerItems();
    }

    @Get(":taskId")
    getTask(@Param("taskId") taskId: string) {
        return this.taskService.obtenerItem(taskId);
    }

    @Post()
    postTasks(@Body() task: CreateTaskDTO): Promise<Task> {
        return this.taskService.createItem(task);
    }

    @Delete(":id")
    deleteTask(@Param("id") id) {
        return this.taskService.eliminarItem(id);
    }

    @Put(":id")
    updateTask(@Body() task: CreateTaskDTO, @Param("id") id) {
        return this.taskService.actualizarItem(id, task);
    }

}