import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from "@nestjs/mongoose";

import { TasksModule } from './tasks/tasks.module';
import { UsuariosModule } from './usuarios/tasks.module';
import { VuelosModule } from './vuelos/tasks.module';
import { PasajerosModule } from './pasajeros/pasajeros.module';


@Module({
  imports: [TasksModule, UsuariosModule, VuelosModule, PasajerosModule, MongooseModule.forRoot("mongodb+srv://usuario:2000131819@cluster0.jqolbpy.mongodb.net/?retryWrites=true&w=majority"), PasajerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}