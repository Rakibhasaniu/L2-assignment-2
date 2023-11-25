import { Request, Response } from "express";
import { userServices } from "./user.services";
import userValidatorSchema from "./user.validation";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body.user;
    const { error, value } = userValidatorSchema.validate(userData);
    if (error) {
      res.json({
        error: error.details,
      });
    } else {
      const result = await userServices.createUserInToDB(value);
      res.json({
        success: true,
        message: "User created successfully!",
        data: result,
      });
    }
  } catch (error: any) {
    res.json({
      success: false,
      message: "failed to create user",
      error: error,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();

    res.json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "failed to fetch users",
      error: err,
    });
  }
};
const getOneUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await userServices.getOneUser(parseInt(userId));

    if (result) {
      res.json({
        success: true,
        message: "User fetched successfully!",
        data: result,
      });
    } else {
      res.json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
  } catch (err) {
    res.json({
      success: false,
      message: "failed to fetch user",
      error: err,
    });
  }
};

const updateOneUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const updatedData = req.body.user;
    const { error, value } = userValidatorSchema.validate(updatedData);
    if (error) {
      res.json({
        error: error.details,
      });
    } else {
      const result = await userServices.updateOneUser(parseInt(userId), value);
      if (result) {
        res.json({
          success: true,
          message: "User updated successfully!",
          data: result,
        });
      } else {
        res.json({
          success: false,
          message: "User not found",
          error: {
            code: 404,
            description: "User not found!",
          },
        });
      }
    }
  } catch (err) {
    res.json({
      success: false,
      message: "Update failed!",
      error: {
        code: 11000,
        description: "User ID or User Name already exsist",
      },
    });
  }
};

const deleteOneUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await userServices.deleteOneUser(parseInt(userId));

    if (result?.deletedCount == 1) {
      res.json({
        success: true,
        message: "User deleted successfully!",
        data: null,
      });
    } else {
      res.json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
  } catch (err) {
    res.json({
      success: false,
      message: "failed to delete user",
      error: err,
    });
  }
};

export const userControllers = {
  createUser,
  getAllUsers,
  getOneUser,
  updateOneUser,
  deleteOneUser,
};
