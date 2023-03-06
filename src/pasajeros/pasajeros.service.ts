import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

import { Pasajero } from "./interfaces/Pasajero";
import { PasajeroDTO } from './dto/pasajero.dto';

@Injectable()
export class PasajerosService {
    constructor(@InjectModel("Pasajero") private modelo: Model<Pasajero>) {}

    async obtenerItems() {
        return await this.modelo.find();
    }

    async obtenerItem(id: string) {
        return await this.modelo.findById(id);
    }

    async createItem(task: PasajeroDTO) {
        const newTask = new this.modelo(task);
        return await newTask.save();
    }

    async eliminarItem(id: String) {
        return await this.modelo.deleteOne({ _id: id });
    }

    async actualizarItem(id: String, task: PasajeroDTO) {
        return await this.modelo.updateOne({ _id: id }, {
            $set: {
                cedula: task.cedula,
                nombre: task.nombre,
                apellido: task.apellido,
                email: task.email,
                nacionalidad: task.nacionalidad,
                puntos: task.puntos,
                codigo: task.codigo
            }
        });
    }
}