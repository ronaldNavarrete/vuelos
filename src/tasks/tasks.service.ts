import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";

import { Task } from "./interfaces/Task";
import { Model } from 'mongoose';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TasksService {

    constructor(@InjectModel("Task") private taskModel: Model<Task>) {}

    async obtenerItems() {
        return await this.taskModel.find();
    }

    async obtenerItem(id: string) {
        return await this.taskModel.findById(id);
    }

    async createItem(task: CreateTaskDTO) {
        const newTask = new this.taskModel(task);
        return await newTask.save();
    }

    async eliminarItem(id: String) {
        return await this.taskModel.deleteOne({ _id: id });
    }

    async actualizarItem(id: String, task: CreateTaskDTO) {
        return await this.taskModel.updateOne({ _id: id }, {
            $set: {
                title: task.title,
                description: task.description,
                stock: task.stock,
                medida: task.medida,
                precio: task.precio
            }
        });
    }
}