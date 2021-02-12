import Couch from '@modules/couchs/infra/typeorm/entities/Couch';
import User from '@modules/users/infra/typeorm/entities/User';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('ratings')
class Rating {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'integer' })
  rating: number;

  @Column('uuid')
  user_id: string;

  @ManyToOne(() => User, (user) => user.ratings)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('uuid')
  couch_id: string;

  @ManyToOne(() => Couch, (couch) => couch.ratings)
  @JoinColumn({ name: 'couch_id' })
  couch: Couch;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Rating;
