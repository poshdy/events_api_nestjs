import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        password: config.get('POSTGRES_PASSWORD'),
        username: config.get('POSTGRES_USER'),
        port: 5431,
        host: '127.0.0.1',
        database: 'events',
        entities: [Event],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
