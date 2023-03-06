import { Schema } from "mongoose";

export const schema = new Schema({
    codigo: String,
    piloto: String,
    hora_salida: String,
    hora_llega: String,
    duracion: Number,
    precio: Number
})