import { Document } from "mongoose";

export interface Vuelo extends Document {
    id?: number;
    codigo: string;
    piloto: string;
    hora_salida: string;
    hora_llega: string;
    duracion: number;
    precio: number;
}