import express from 'express'
import { userControllers } from './user.controller'
import { orderController } from '../ordersModule/order.controller'

const router = express.Router()

router.post('/', userControllers.createUser)
router.get('/', userControllers.getAllUsers)
router.get('/:userId', userControllers.getOneUser)
router.put('/:userId', userControllers.updateOneUser)
router.delete('/:userId', userControllers.deleteOneUser)

router.put('/:userId/orders', orderController.addNewProduct)
router.get('/:userId/orders', orderController.getAllProduct)
router.get('/:userId/orders/total-price', orderController.totalpriceCount)

export const userRoute = router
