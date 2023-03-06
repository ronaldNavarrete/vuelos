import { Document } from "mongoose";

export interface Usuario extends Document {
    id?: number;
    nombre: string;
    usuario: string;
    email: string;
    password: string;
}