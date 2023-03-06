import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

import { schema } from "./schemas/schema";
import { UsuariosController } from "./usuarios.controller";
import { UsuariosService } from './usuarios.service';

@Module({
    imports: [ MongooseModule.forFeature([
        {
            name: "Usuario",
            schema: schema
        }
    ])],
    controllers: [ UsuariosController ],
    providers: [ UsuariosService ]
})
export class UsuariosModule {}