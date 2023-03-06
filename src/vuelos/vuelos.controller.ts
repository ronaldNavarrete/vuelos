import { Controller, Delete, Get, Post, Put, Body, Param, Req, Res } from '@nestjs/common';
import { VueloDTO } from './dto/vuelo.dto';
import { Vuelo } from "./interfaces/Vuelo";
import { VuelosService } from "./vuelos.service";

@Controller('vuelos')
export class VuelosController {

    constructor(private taskService: VuelosService) {}

    @Get()
    getTasks(): Promise<Vuelo[]> {
        return this.taskService.obtenerItems();
    }

    @Get(":taskId")
    getTask(@Param("taskId") taskId: string) {
        return this.taskService.obtenerItem(taskId);
    }

    @Post()
    postTasks(@Body() task: VueloDTO): Promise<Vuelo> {
        return this.taskService.createItem(task);
    }

    @Delete(":id")
    deleteTask(@Param("id") id) {
        return this.taskService.eliminarItem(id);
    }

    @Put(":id")
    updateTask(@Body() task: VueloDTO, @Param("id") id) {
        return this.taskService.actualizarItem(id, task);
    }

}