import { EntityRepository, Repository } from 'typeorm'
import { Transaction } from '../entities/Transaction'

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {

}

export { TransactionsRepository }