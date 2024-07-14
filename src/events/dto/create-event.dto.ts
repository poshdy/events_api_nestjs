import { IsDateString, IsString, Length } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @Length(1, 20, { message: 'Name is too short' })
  name: string;
  @IsString()
  @Length(1, 20, {
    message: 'Event description should contain at least 1 character',
  })
  description: string;
  @IsDateString()
  date: string;
}
