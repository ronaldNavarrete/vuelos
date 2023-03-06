import { Controller, Delete, Get, Post, Put, Body, Param, Req, Res } from '@nestjs/common';
import { Pasajero } from "./interfaces/Pasajero";
import { PasajeroDTO } from './dto/pasajero.dto';
import { PasajerosService } from "./pasajeros.service";

@Controller('pasajeros')
export class PasajerosController {

    constructor(private servicio: PasajerosService) {}

    @Get()
    getTasks(): Promise<Pasajero[]> {
        return this.servicio.obtenerItems();
    }

    @Get(":taskId")
    getTask(@Param("taskId") taskId: string) {
        return this.servicio.obtenerItem(taskId);
    }

    @Post()
    postTasks(@Body() task: PasajeroDTO): Promise<Pasajero> {
        return this.servicio.createItem(task);
    }

    @Delete(":id")
    deleteTask(@Param("id") id) {
        return this.servicio.eliminarItem(id);
    }

    @Put(":id")
    updateTask(@Body() task: PasajeroDTO, @Param("id") id) {
        return this.servicio.actualizarItem(id, task);
    }

}