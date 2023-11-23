import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { join } from 'path';

import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';

import { EnvConfiguration } from './config/env.config';
import { JoiValidationsSchemaConfig } from './config/joi.validations';
import { MuestrasModule } from './muestras/muestras.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { DosisModule } from './dosis/dosis.module';
import { FertilizantesModule } from './fertilizantes/fertilizantes.module';
import { UnidadProductivaModule } from './unidad_productiva/unidad_productiva.module';
import { CultivosModule } from './cultivos/cultivos.module';
import { MuestrasAnalizadasModule } from './muestras_analizadas/muestras_analizadas.module';
import { RecomendacionesModule } from './recomendaciones/recomendaciones.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationsSchemaConfig,
    }),
    ServeStaticModule.forRoot({
      // rootPath: join(__dirname, '..', 'client'),
      serveRoot: '/public',
      rootPath: join(__dirname, '..', 'public'),
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    MuestrasModule,
    EvaluacionModule,
    DosisModule,
    FertilizantesModule,
    UnidadProductivaModule,
    CultivosModule,
    MuestrasAnalizadasModule,
    RecomendacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
