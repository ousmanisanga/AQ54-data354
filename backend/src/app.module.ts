import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { SensorModule } from './sensor/sensor.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [UserModule, SensorModule, ConfigModule.forRoot({
    isGlobal: true,
  }), HttpModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
