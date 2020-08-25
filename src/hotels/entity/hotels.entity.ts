import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity()
export default class Hotels extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'hotel_name'})
  hotelName: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ name: 'duration_of_stay'})
  durationOfStay: number;

  @Column({ name: 'package_validity'})
  packageValidity: number;

  @Column()
  description: string;
}