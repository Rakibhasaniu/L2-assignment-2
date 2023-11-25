import express from 'express'

const router = express.Router()

router.post('/')
router.get('/')
router.get('/:userId')
router.put('/:userId')
router.delete('/:userId')

router.put('/:userId/orders')
router.get('/:userId/orders')
router.get('/:userId/orders/total-price')

export const userRoute = router
