import { Document } from "mongoose";

export interface Pasajero extends Document {
    id?: number;
    cedula: string;
    nombre: string;
    apellido: string;
    email: string;
    nacionalidad: string;
    puntos: number;
    codigo: String;
}