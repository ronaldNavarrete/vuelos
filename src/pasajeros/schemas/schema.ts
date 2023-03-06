import { Schema } from "mongoose";

export const schema = new Schema({
    cedula: String,
    nombre: String,
    apellido: String,
    email: String,
    nacionalidad: String,
    puntos: Number,
    codigo: String
})