import { Schema } from "mongoose";

export const schema = new Schema({
    nombre: String,
    usuario: String,
    email: String,
    password: String
})