import { Request, Response } from 'express'

import { TransactionsServices } from '../services/TransactionsServices'

class TransactionsController {

  async create(request: Request, response: Response) {
    const { title, amount, type, category } = request.body
    
    const transactionsServices = new TransactionsServices()

    try {
      const transactions = await transactionsServices.create({ title, amount, type, category })
      return response.json(transactions)
    } catch (err) {
      return response
        .status(400)
        .json({ mensagem: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const transactionsServices = new TransactionsServices();

    try {
      const transactions = await transactionsServices.index()
      return response.status(200).json(transactions)
    } catch (err: any) {
      return response
        .status(400)
        .json({ mensagem: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const transactionsServices = new TransactionsServices();
    const { id } = request.params;

    try {
      const transactions = await transactionsServices.show({ id })
      return response.status(200).json(transactions)
    } catch (err: any) {
      return response
        .status(400)
        .json({ mensagem: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const transactionsServices = new TransactionsServices();
    const { id } = request.params

    try {
      const transactions = await transactionsServices.delete({ id })
      return response.json({ message: 'Transação excluída com sucesso !!' })
    } catch (err: any) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    const { title, amount, type, category } = request.body
    const { id } = request.params

    const transactionsServices = new TransactionsServices()

    try {
      const transactions = await transactionsServices.update({ id, title, amount, type, category })
      return response
        .status(200)
        .json(transactions)
    } catch (err: any) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { TransactionsController }