import { getCustomRepository } from 'typeorm'
import { TransactionsRepository } from '../repositories/TransactionsRepository'

interface ITransactionsCreate {
  title: string;
  amount: number;
  type: string;
  category: string;
}

interface ITransactionsShow {
  id: string;
}

interface ITransactionsUpdate {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
}

class TransactionsServices {

  async create({ title, amount, type, category }: ITransactionsCreate) {

    const transactionsRepository =  getCustomRepository(TransactionsRepository)

     const transactions = await transactionsRepository.create({
      title,
      amount,
      type,
      category
    })

    await transactionsRepository.save(transactions)

    return transactions
  }

  async index() {
    const transactionsRepository =  getCustomRepository(TransactionsRepository);
    const transactions = await transactionsRepository.find();
    return transactions;
  }

  async show({ id }: ITransactionsShow) {
    const transactionsRepository =  getCustomRepository(TransactionsRepository);
    const transactions = transactionsRepository.findOne({ id })
    return transactions
  }

  async delete({ id }: ITransactionsShow) {
    const transactionsRepository =  getCustomRepository(TransactionsRepository);

    let transactions = await transactionsRepository.findOne({ id })

    if (!transactions) {
      throw new Error('Transação não encontrada !!')
    }

    return await transactionsRepository.delete({ id })
  }

  async update({ id, title, amount, type, category }: ITransactionsUpdate) {
    const transactionsRepository =  getCustomRepository(TransactionsRepository);

    let transactions = await transactionsRepository.findOne({ id })

    if (!transactions) {
      throw new Error('Transação não encontrada')
    }

    await transactionsRepository.update(id, {
      title,
      amount,
      type,
      category
    })

    // pesquisar o cliente pelo id
    transactions = await transactionsRepository.findOne({ id })

    // retornar um objeto
    return transactions
  }
}

export { TransactionsServices }