import { Module } from '@nestjs/common';
import { VuelosController } from "./vuelos.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { schema } from "./schemas/schema";
import { VuelosService } from './vuelos.service';

@Module({
    imports: [ MongooseModule.forFeature([
        {
            name: "Vuelo",
            schema: schema
        }
    ])],
    controllers: [ VuelosController ],
    providers: [ VuelosService ]
})
export class VuelosModule {}