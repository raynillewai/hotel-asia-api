import { Module } from "@nestjs/common";
import { HotelsService } from "./hotels.service";
import { HotelsController } from "./hotels.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import Hotels from "./entity/hotels.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Hotels])],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule {}