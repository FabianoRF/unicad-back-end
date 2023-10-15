import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  deliveryDate: string;

  @Column('decimal')
  initialLatitude: number;

  @Column('decimal')
  initialLongitude: number;

  @Column('decimal')
  finalLatitude: number;

  @Column('decimal')
  finalLongitude: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
