import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsService } from './hotels/hotels.service';
import { HotelsController } from './hotels/hotels.controller';
import { Connection } from 'typeorm';
import Hotels from './hotels/entity/hotels.entity';
import { HotelsModule } from './hotels/hotels.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './http-exception.filter';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'rm-1udzqaa0usj7n5fp7no.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'superuser',
    password: 'bobowaix3',
    database: 'hotel_asia',
    entities: [Hotels],
    synchronize: true,
  }),
  HotelsModule,
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'front'),
  }),
],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    }, 
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
