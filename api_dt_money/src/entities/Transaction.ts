import {
  Column,
  CreateDateColumn,
  Entity, PrimaryColumn, UpdateDateColumn,
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('transactions')
class Transaction {

  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  amount: number;

  @Column()
  type: string;

  @Column()
  category: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }

}

export { Transaction }