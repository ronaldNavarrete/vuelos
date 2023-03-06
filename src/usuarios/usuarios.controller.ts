import { Controller, Delete, Get, Post, Put, Body, Param, Req, Res } from '@nestjs/common';
import { Usuario } from "./interfaces/Usuario";
import { UsuarioDTO } from './dto/usuario.dto';
import { UsuariosService } from "./usuarios.service";

@Controller('usuarios')
export class UsuariosController {

    constructor(private taskService: UsuariosService) {}

    @Get()
    getTasks(): Promise<Usuario[]> {
        return this.taskService.obtenerItems();
    }

    @Get(":taskId")
    getTask(@Param("taskId") taskId: string) {
        return this.taskService.obtenerItem(taskId);
    }

    @Post()
    postTasks(@Body() task: UsuarioDTO): Promise<Usuario> {
        return this.taskService.createItem(task);
    }

    @Delete(":id")
    deleteTask(@Param("id") id) {
        return this.taskService.eliminarItem(id);
    }

    @Put(":id")
    updateTask(@Body() task: UsuarioDTO, @Param("id") id) {
        return this.taskService.actualizarItem(id, task);
    }

}