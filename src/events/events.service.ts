import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Not, Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    return await this.repository.save(createEventDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({ id });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.repository.preload({ id, ...updateEventDto });

    return await this.repository.save(event);
  }

  async remove(id: number) {
    const event = await this.findOne(id);
    return await this.repository.remove(event);
  }
}
