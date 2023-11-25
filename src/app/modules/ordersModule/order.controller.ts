import { Request, Response } from 'express'
import { orderServices } from './order.services'

const addNewProduct = async (req: Request, res: Response) => {
  const order = req.body.order
  const userId = req.params.userId
  const result = await orderServices.addNewProductInToDB(
    parseInt(userId),
    order,
  )

  if (result) {
    res.json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    })
  } else {
    res.json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}
const getAllProduct = async (req: Request, res: Response) => {
  const userId = req.params.userId

  const result = await orderServices.getAllOrders(parseInt(userId))

  if (result) {
    res.json({
      success: true,
      message: 'Order fetched successfully!',
      data: result,
    })
  } else {
    res.json({
      success: false,
      message: 'User not found!',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}

const totalpriceCount = async (req: Request, res: Response) => {
  const userId = req.params.userId
  const result = await orderServices.totalpriceCount(parseInt(userId))
  if (result) {
    res.json({
      success: true,
      message: 'Total price calculated successfully!',
      data: result,
    })
  } else {
    res.json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}

export const orderController = {
  addNewProduct,
  getAllProduct,
  totalpriceCount,
}
