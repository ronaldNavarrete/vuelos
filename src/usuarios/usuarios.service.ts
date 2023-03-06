import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

import { Usuario } from "./interfaces/Usuario";
import { UsuarioDTO } from './dto/usuario.dto';

@Injectable()
export class UsuariosService {

    constructor(@InjectModel("Usuario") private taskModel: Model<Usuario>) {}

    async obtenerItems() {
        return await this.taskModel.find();
    }

    async obtenerItem(id: string) {
        return await this.taskModel.findById(id);
    }

    async createItem(task: UsuarioDTO) {
        const newTask = new this.taskModel(task);
        return await newTask.save();
    }

    async eliminarItem(id: String) {
        return await this.taskModel.deleteOne({ _id: id });
    }

    async actualizarItem(id: String, task: UsuarioDTO) {
        return await this.taskModel.updateOne({ _id: id }, {
            $set: {
                nombre: task.nombre,
                usuario: task.usuario,
                email: task.email,
                password: task.password
            }
        });
    }
}