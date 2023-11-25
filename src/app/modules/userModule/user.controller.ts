import { Request, Response } from 'express'

const createUser = async (req: Request, res: Response) => {
  try {
    res.json({
      connected: 'checked',
    })
  } catch (error) {
    res.json({
      success: false,
      message: 'failed to create user',
      error: error,
    })
  }
}

const getAllUsers = async (req: Request, res: Response) => {
  try {
    res.json({
      connected: 'checked',
    })
  } catch (error) {
    res.json({
      success: false,
      message: 'failed to create user',
      error: error,
    })
  }
}
const getOneUser = async (req: Request, res: Response) => {
  try {
    res.json({
      connected: 'checked',
    })
  } catch (error) {
    res.json({
      success: false,
      message: 'failed to create user',
      error: error,
    })
  }
}

const updateOneUser = async (req: Request, res: Response) => {
  try {
    res.json({
      connected: 'checked',
    })
  } catch (error) {
    res.json({
      success: false,
      message: 'failed to create user',
      error: error,
    })
  }
}

const deleteOneUser = async (req: Request, res: Response) => {
  try {
    res.json({
      connected: 'checked',
    })
  } catch (error) {
    res.json({
      success: false,
      message: 'failed to create user',
      error: error,
    })
  }
}

export const userControllers = {
  createUser,
  getAllUsers,
  getOneUser,
  updateOneUser,
  deleteOneUser,
}
