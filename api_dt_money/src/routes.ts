import { Router } from 'express'

import { TransactionsController } from './controllers/TransactionsController'

const routes = Router()

const transactionsController = new TransactionsController()

routes.post('/transactions', transactionsController.create)
routes.get('/transactions', transactionsController.index)
routes.get('/transactions/:id', transactionsController.show)
routes.delete('/transactions/:id', transactionsController.delete)
routes.put('/transactions/:id', transactionsController.update)

export { routes }