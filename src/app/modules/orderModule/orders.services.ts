import User from "../userModule/user.schema&model";
import { TOrder, TOrders } from "./orders.interface";
import Order from "./orders.schema$model";

const addNewProductInToDB = async (userId: number, order: TOrder) => {
  if (await User.isUserExsistById(userId)) {
    if (await Order.isUserExsistById(userId)) {
      order.orderTotal = order.price * order.quantity;
      const result = await Order.updateOne(
        { userId },
        { $push: { orders: order } }
      );
      return result;
    } else {
      order.orderTotal = order.price * order.quantity;
      const initialdoc: TOrders = {
        userId: userId,
        orders: [order],
      };

      const result = await Order.create(initialdoc);
      return result;
    }
  } else {
    return null;
  }
};

const getAllOrders = async (userId: number) => {
  if (await User.isUserExsistById(userId)) {
    if (await Order.isUserExsistById(userId)) {
      const result = await Order.aggregate([
        { $match: { userId: userId } },
        {
          $project: {
            orders: {
              _id: 0,
              orderTotal: 0,
            },
            userId: 0,
            _id: 0,
            __v: 0,
          },
        },
      ]);
      return result[0];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const totalpriceCount = async (userId: number) => {
  if (await User.isUserExsistById(userId)) {
    if (await Order.isUserExsistById(userId)) {
      const result = await Order.aggregate([
        { $match: { userId: userId } },
        {
          $addFields: { totalPrice: { $sum: "$orders.orderTotal" } },
        },
        {
          $project: {
            orders: 0,
            _id: 0,
            userId: 0,
            __v: 0,
          },
        },
      ]);
      return result[0];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
export const orderServices = {
  addNewProductInToDB,
  getAllOrders,
  totalpriceCount,
};
