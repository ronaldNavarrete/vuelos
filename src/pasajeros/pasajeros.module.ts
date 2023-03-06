import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

import { schema } from "./schemas/schema";
import { PasajerosController } from "./pasajeros.controller";
import { PasajerosService } from './pasajeros.service';

@Module({
    imports: [ MongooseModule.forFeature([
        {
            name: "Pasajero",
            schema: schema
        }
    ])],
    controllers: [ PasajerosController ],
    providers: [ PasajerosService ]
})

export class PasajerosModule {}