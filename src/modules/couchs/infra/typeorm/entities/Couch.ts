import Rating from '@modules/ratings/infra/typeorm/entities/Rating';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('couchs')
class Couch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  model: string;

  @Column({ type: 'integer' })
  seaters: number;

  @Column({ type: 'integer' })
  length: number;

  @Column({ type: 'integer' })
  height: number;

  @Column({ type: 'integer' })
  width: number;

  @OneToMany(() => Rating, (rating) => rating.user)
  ratings: Rating[];

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}

export default Couch;
