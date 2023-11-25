import express from 'express'
import { userControllers } from './user.controller'
import { ordersController } from '../orderModule/orders.controller'

const router = express.Router()

router.post('/', userControllers.createUser)
router.get('/', userControllers.getAllUsers)
router.get('/:userId', userControllers.getOneUser)
router.put('/:userId', userControllers.updateOneUser)
router.delete('/:userId', userControllers.deleteOneUser)

router.put('/:userId/orders', ordersController.addNewProduct)
router.get('/:userId/orders', ordersController.getAllProduct)
router.get('/:userId/orders/total-price', ordersController.totalpriceCount)

export const userRoute = router
