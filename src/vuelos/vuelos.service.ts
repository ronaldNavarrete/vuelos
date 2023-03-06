import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";

import { Vuelo } from "./interfaces/Vuelo";
import { Model } from 'mongoose';
import { VueloDTO } from './dto/vuelo.dto';

@Injectable()
export class VuelosService {

    constructor(@InjectModel("Vuelo") private taskModel: Model<Vuelo>) {}

    async obtenerItems() {
        return await this.taskModel.find();
    }

    async obtenerItem(id: string) {
        return await this.taskModel.findById(id);
    }

    async createItem(task: VueloDTO) {
        const newTask = new this.taskModel(task);
        return await newTask.save();
    }

    async eliminarItem(id: String) {
        return await this.taskModel.deleteOne({ _id: id });
    }

    async actualizarItem(id: String, task: VueloDTO) {
        return await this.taskModel.updateOne({ _id: id }, {
            $set: {
                codigo: task.codigo,
                piloto: task.piloto,
                hora_salida: task.hora_salida,
                hora_llega: task.hora_llega,
                duracion: task.duracion,
                precio: task.precio
            }
        });
    }

}