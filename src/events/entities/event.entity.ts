import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('event')
export class Event {
  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'integer' })
  id: number;

  @Column('varchar', { name: 'event_name' })
  name: string;

  @Column('varchar', { name: 'description' })
  description: string;

  @Column('timestamp', { name: 'date' })
  date: Date;
}
