import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  create(createEventDto: CreateEventDto) {
    return {
      message: 'new Event created',
      data: createEventDto,
    };
  }

  findAll() {
    return `all events`;
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `event updated! ${updateEventDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
